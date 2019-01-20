const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const Promise = require('bluebird');
const _ = require(`lodash`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    const year = node.frontmatter.date
    createNodeField({
      node,
      name: `year`,
      value: year,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve) => {
    graphql(`
      {
        blogPosts: allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC },
          filter: { frontmatter: { type: { eq: "post" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                author
                date(formatString: "MMMM DD, YYYY")
                type
                tags
              }
              fields {
                slug
                year(formatString: "YYYY")
              }
              html
              excerpt(format: PLAIN)
            }
            previous {
              fields {
                slug
              }
            }
            next {
              fields {
                slug
              }
            }
          }
        }
        blogCode: allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC },
          filter: { frontmatter: { type: { eq: "code" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                author
                date(formatString: "MMMM DD, YYYY")
                type
                tags
              }
              fields { 
                slug
              }
              html
              excerpt(format: PLAIN)
            }
            previous {
              fields {
                slug
              }
            }
            next {
              fields {
                slug
              }
            }
          }
        }
        blogPages: allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "page" } } }
        ) {
          edges {
            node {
              frontmatter {
                type
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      //page or post?
      const blogPosts = result.data.blogPosts.edges;
      const blogCode = result.data.blogCode.edges;
      const blogPages = result.data.blogPages.edges;
      //build pages, posts, tags, and index.
      generatePost(createPage, blogPosts);
      generatePost(createPage, blogCode);
      generatePage(createPage, blogPages);
      generateTagPages(createPage, blogPosts);
      generateTagPages(createPage, blogCode);
      createPagination(createPage, blogPosts, '/page')
      createPaginationCode(createPage, blogCode, '/code')
    });
    resolve();
  });
};

//define defaults.
const indexPage = path.resolve(`./src/templates/index.js`);
const blogPost = path.resolve(`./src/templates/post.js`);
const blogPage = path.resolve(`./src/templates/page.js`);
const tagPage = path.resolve(`./src/templates/tags.js`);

function generatePost(createPage, posts) {
  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: blogPost,
      context: {
        slug: node.fields.slug,
        nextPostPath: next ? next.fields.slug : 'none',
        prevPostPath: previous ? previous.fields.slug : 'none',
      },
    });
  });
}

function generatePage(createPage, pages) {
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPage,
      context: {
        slug: node.fields.slug,
      },
    });
  });
}

function generateTagPages(createPage, edges) {
  const posts = {};

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = [];
        }
        posts[tag].push(node);
      });
    }
  });

  Object.keys(posts).forEach(tagName => {
    const pageSize = 5;
    const pagesSum = Math.ceil(posts[tagName].length / pageSize);

    for (let page = 1; page <= pagesSum; page++) {
      createPage({
        path:
          page === 1
            ? `/tag/${_.kebabCase(tagName)}`
            : `/tag/${_.kebabCase(tagName)}/${page}`,
        component: tagPage,
        context: {
          posts: paginate(posts[tagName], pageSize, page),
          tag: tagName,
          pagesSum,
          page,
        },
      });
    }
  });
}

function createPagination(createPage, edges, pathPrefix) {
  const indexSize = 5;
  const pagesSum = Math.ceil(edges.length / indexSize);

  for (let page = 1; page <= pagesSum; page++) {
    createPage({
      path: page === 1
        ? `/`
        : `${pathPrefix}/${page}`,
      component: indexPage,
      context: {
        posts: paginate(edges, indexSize, page).map(({ node }) => node),
        page,
        pagesSum,
        prevPath: page - 1 > 0
          ? `${pathPrefix}/${page - 1}`
          : page === 1
            ? null
            : `/`,
        nextPath: page + 1 <= pagesSum
          ? `${pathPrefix}/${page + 1}`
          : null,
      },
    });
  }
}

function createPaginationCode(createPage, edges, pathPrefix) {
  const indexSize = 5;
  const pagesSum = Math.ceil(edges.length / indexSize);

  for (let page = 1; page <= pagesSum; page++) {
    createPage({
      path: page === 1
        ? `/code`
        : `${pathPrefix}/${page}`,
      component: indexPage,
      context: {
        posts: paginate(edges, indexSize, page).map(({ node }) => node),
        page,
        pagesSum,
        prevPath: page - 1 > 0
          ? `${pathPrefix}/${page - 1}`
          : page === 1
            ? null
            : `${pathPrefix}/${page}`,
        nextPath: page + 1 <= pagesSum
          ? `${pathPrefix}/${page + 1}`
          : null,
      },
    });
  }
}

function paginate(array, page_size, page_number) {
  return array.slice(0).slice((page_number - 1) * page_size, page_number * page_size);
}
