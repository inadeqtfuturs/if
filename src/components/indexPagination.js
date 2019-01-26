import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import style from './styles/indexPagination';

const IndexPagination = props => {
  const { prevPath, nextPath, themeStyle=style } = props;

  return (
    <nav className={themeStyle}>
      {prevPath ? (
        <Link
          to={prevPath === '/page/1' ? '/' : prevPath}>
          newer
        </Link>
      ) : <span></span>}
      {nextPath ? (
        <Link
          to={nextPath}>
          older
        </Link>
      ) : <span></span>}
    </nav>
  );
};

IndexPagination.propTypes = {
  prevPath: PropTypes.string,
  nextPath: PropTypes.string,
};

export default IndexPagination;
