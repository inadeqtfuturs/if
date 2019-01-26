import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import facepaint from 'facepaint';

const Figure = props => {
  const { image, width } = props;

  console.log(typeof(image))
  console.log(typeof(width))

  const breakpoints = [30, 40, 62];
  const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));
  const pageImage = css`
    ${mq({
      float: ['center', 'right', 'right', 'right'],
      width: ['100%', `${width}`, `${width}`, `${width}`],
      marginTop: ['.5rem', '.5rem', '1rem', '1rem'],
      marginLeft: ['0rem', '1rem', '2rem', '2rem'],
    })};
    margin-bottom: 1rem;
  `;

  return (
    <figure className={pageImage}>
      <Img
        fluid={image.childImageSharp.fluid}
      />
    </figure>
  );
};

Figure.propTypes = {
  image: PropTypes.object,
  width: PropTypes.string,
};

export default Figure;
