import React from 'react'
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import style from '../components/portfolio/styles/portfolio';

import About from '../components/portfolio/about';
import Footer from '../components/portfolio/footer';
import Header from '../components/portfolio/header';
import Home from '../components/portfolio/home';
import SEO from '../components/seo';
import Slider from '../components/portfolio/slider';
import ThemeWrapper from '../components/portfolio/themeWrapper'
import Wrapper from '../components/portfolio/wrapper';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
      dark: false
    };
    this.toHome = this.toHome.bind(this);
    this.toPortfolio = this.toPortfolio.bind(this);
    this.toAbout = this.toAbout.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentWillUnmount() {
    this.setState({ dark: false });
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
  toggleTheme() {
    this.setState({ dark: !this.state.dark });
    console.log(this.state.dark);
  }

  render() {
    const { data, themeStyle=style } = this.props;

    const projects = data.allMarkdownRemark.edges;

    return (
      <ThemeWrapper
        dark={this.state.dark}>
        <Wrapper>
          <Header 
            toHome={this.toHome}
            toggleTheme={this.toggleTheme}
            dark={this.state.dark} />
            <div className={themeStyle}>
            <TransitionGroup className="article">
              <CSSTransition
                key={this.state.active}
                timeout={1000}
                classNames="main-fade">
                  <>
                  {
                    this.state.active === 'home' && <Home
                                                      toPortfolio={this.toPortfolio}
                                                      toAbout={this.toAbout} />
                  }
                  {
                    this.state.active === 'portfolio' && <Slider
                                                          toAbout={this.toAbout}
                                                          projects={projects} />
                  }
                  {
                    this.state.active === 'about' && <About
                                                      toPortfolio={this.toPortfolio} />
                  }
                </>
              </CSSTransition>
            </TransitionGroup>
            </div>
          <Footer />
          <SEO />
        </Wrapper>
      </ThemeWrapper>
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
            code
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
