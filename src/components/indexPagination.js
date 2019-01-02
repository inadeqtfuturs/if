import React from 'react';
import { Link } from 'gatsby';

import style from './styles/indexPagination';

const indexPagination = props => {
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

export default indexPagination;
