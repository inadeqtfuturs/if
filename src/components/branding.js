import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import style from './styles/branding';

const Branding = props => {
  const { title, themeStyle=style } = props;

  return (
    <Link to='/' className={themeStyle}>
      <h1>{title}</h1>
    </Link>
  );
};

Branding.propTypes ={
  title: PropTypes.string,
}

export default Branding;
