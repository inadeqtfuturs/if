import React from 'react'
import { graphql } from 'gatsby';

import Main from '../components/Main';
import Post from '../components/Post';
import PostPagination from '../components/PostPagination';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TagList from '../components/TagList';

export default ({ data }) => {

  const {
    nextPost: next,
    prevPost: previous,
    markdownRemark: {
      html,
      excerpt,
      frontmatter: {
        title,
        date,
        author,
        tags,
        image,
        display,
        width
      },
      fields: {
        slug,
      },
    },
  } = data;

  return (
    <Layout>
      <Main>
        <Post
          title={title}
          date={date}
          author={author}
          html={html}
          image={image}
          display={display}
          width={width}
        />
        <TagList tags={tags} />
        <PostPagination
          next={next}
          previous={previous}
        />
      </Main>
      <SEO
        title={title}
        description={excerpt}
        slug={slug}
        keywords={tags}
        image={image}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($slug: String!, $nextPostPath: String!, $prevPostPath: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(format: PLAIN)
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        tags
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1400) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        display
        width
      }
      fields {
        slug
      }
    }
    nextPost: markdownRemark(fields: { slug: { eq: $nextPostPath } } ) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    prevPost: markdownRemark(fields: { slug: { eq: $prevPostPath } } ) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
