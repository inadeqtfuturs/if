import React from 'react'
import { graphql } from 'gatsby';

import Page from '../components/page';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => {
  const {
    markdownRemark: {
      html,
      excerpt,
      frontmatter: {
        title,
        image,
        display,
        width
      },
      fields: {
        slug,
      },
    },
  } = data

  return (
    <Layout>
      <Page
        title={title}
        html={html}
        image={image}
        display={display}
        width={width}
      />
      <SEO 
        title={title}
        description={excerpt}
        slug={slug}
        image={image}
      />
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } } ) {
      html
      excerpt(format: PLAIN)
      frontmatter {
        title
        image {
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
  }
`;
