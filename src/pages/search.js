import React, { Component } from 'react'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Main from '../components/main';
import Layout from '../components/layout';
import PostExcerpt from '../components/postExcerpt';
import SEO from '../components/seo';

const searchingFor = term => {
  return function(x) {
    return (
      (x.node.frontmatter.tags &&
        x.node.frontmatter.tags.every(tag =>
          tag.toLowerCase().includes(term.toLowerCase())
        )) ||
      x.node.frontmatter.title.toLowerCase().includes(term.toLowerCase()) ||
      x.node.html.toLowerCase().includes(term.toLowerCase()) ||
      !term
    )
  }
}

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.data.allMarkdownRemark.edges,
      term: '',
    }
  }

  componentDidMount() {
    this.setState({ term: decodeURIComponent(window.location.search.substring(3).replace(/\+/g, '%20')) })
  }

  render() {
    const {term, posts} = this.state;
    return (
      <Layout>
        <Main>
          <h2>results for '{term}':</h2>
          <div>
            {posts.filter(searchingFor(term))
              .map((post, index) => (
                <PostExcerpt
                  key={index}
                  post={post.node} />
              ))
              .slice(0,10)
            }
          </div>
        </Main>
        <SEO 
          title={'inadequate futures search'}
          slug={'/search/?q=' + term}
        />
      </Layout>
    )
  }
}

SearchPage.propTypes = {
  term: PropTypes.string,
  posts: PropTypes.object
};

export default SearchPage;

export const pageQuery = graphql`
  query SearchQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {frontmatter: { type: { eq:"post" } } },
    ) {
      edges {
        node {
          id
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "DD MMMM, YYYY")
            tags
          }
        }
      }
    }
  }
`
