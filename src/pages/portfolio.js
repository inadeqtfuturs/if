import React from 'react'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import About from '../components/portfolio/about';
import Footer from '../components/portfolio/footer';
import Header from '../components/portfolio/header';
import Home from '../components/portfolio/home';
import SEO from '../components/seo';
import Slider from '../components/portfolio/slider';
import Wrapper from '../components/portfolio/wrapper';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    };
    this.toHome = this.toHome.bind(this);
    this.toPortfolio = this.toPortfolio.bind(this);
    this.toAbout = this.toAbout.bind(this);
  }

  toHome() {
    this.setState({ active: 'home' });
  }
  toPortfolio() {
    this.setState({ active: 'portfolio' });
  }
  toAbout() {
    this.setState({ active: 'about' });
  }

  render() {
    const { data } = this.props;

    // let { edges: projects } = data.allMarkdownRemark;
    // posts = posts.map(post => post.node);
    let projects = data.allMarkdownRemark.edges;

    return (
      <Wrapper>
        <Header />
          {
            this.state.active === 'home' && <Home
                                              toPortfolio={this.toPortfolio}
                                              toAbout={this.toAbout} />
          }
          {
            this.state.active === 'portfolio' && <Slider
                                                  toHome={this.toHome}
                                                  toAbout={this.toAbout}
                                                  projects={projects} />
          }
          {
            this.state.active === 'about' && <About
                                              toPortfolio={this.toPortfolio} />
          }
        <Footer />
        <SEO />
      </Wrapper>
    );
  }
}

Portfolio.propTypes = {
  data: PropTypes.object,
};

export default Portfolio;

export const query = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            tech
            link
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
