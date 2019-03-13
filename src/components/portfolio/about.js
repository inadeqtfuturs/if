import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import style from './styles/about';

const About = props => {
  const { toPortfolio, themeStyle=style } = props;

  return (
    <StaticQuery
      query={aboutQuery}
      render={data => (
        <section className={themeStyle}>
          <article>
            <h1>alex christie</h1>
            <p>hi. i'm passionate about building elegant, responsive, and speedy front ends. i'm trained as an educator and researcher, so i'm eager to learn new things and teach others. here's some of the technology i like to use:</p>
            <section>
              <h3>languages</h3>
              <p>html5, css (scss, css-in-js), javascript (es6)</p>
              <h3>frameworks and tools</h3>
              <p>react, react-native, gatsby, emotion.js, graphql</p>
            </section>
            <button onClick={toPortfolio}>my work</button>
          </article>
          <figure>
            <Img fluid={data.profileImage.childImageSharp.fluid} />
          </figure>
        </section>
      )}
    />
  );
};

export default About;

const aboutQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "images/profile.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`