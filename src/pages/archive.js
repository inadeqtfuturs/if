import React from 'react'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Archive from '../components/archive';
import Main from '../components/main';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ArchivePage = ({ data }) => {

  let { edges: posts } = data.allMarkdownRemark;
  posts = posts.map(post => post.node);

  return (
    <Layout>
      <Main>
        <Archive
          year={'2018'}
          posts={posts} />
        <Archive
          year={'2017'}
          posts={posts} />
      </Main>
      <SEO />
    </Layout>
  );
};

ArchivePage.propTypes = {
  data: PropTypes.object,
};

export default ArchivePage;

export const query = graphql`
  query ArchiveQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: { frontmatter: { type: { eq:"post" } } },
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM")
          }
          fields {
            slug
            year(formatString: "YYYY")
          }
        }
      }
    }
  }
`;
