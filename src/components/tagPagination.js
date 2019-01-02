import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const TagPagination = ({ tag, page, pagesSum }) => (
  <div>
    {page === 2 && (
      <Link to={`/tag/${tag}/`}>newer</Link>
    )}
    {page > 2 && (
      <Link to={`/tag/${tag}/${page - 1}`}>
      newer</Link>
    )}
    {page < pagesSum && (
      <Link to={`/tag/${tag}/${page + 1}/`}>older</Link>
    )}
  </div>
);

TagPagination.propTypes = {
  tag: PropTypes.string,
  page: PropTypes.number,
  pagesSum: PropTypes.number,
};

export default TagPagination;
