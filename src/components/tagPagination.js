import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import style from './styles/indexPagination'

const TagPagination = ({ tag, page, pagesSum }, props) => {
  const { themeStyle=style } = props;

  return (
    <nav className={themeStyle}>
      {page >= 2
        ? page === 2
          ? (
            <Link to={`/tag/${tag}/`}>newer</Link>
            ) 
          : (
            <Link to={`/tag/${tag}/${page - 1}`}>newer</Link>
            ) 
        : <span />}
      {page < pagesSum 
        ? (
          <Link to={`/tag/${tag}/${page + 1}/`}>older</Link>
          )
        : <span />}
    </nav>
  );
}

TagPagination.propTypes = {
  tag: PropTypes.string,
  page: PropTypes.number,
  pagesSum: PropTypes.number,
};

export default TagPagination;
