import React from 'react'
import { Link } from 'gatsby';

import style from './styles/footerArchive';

const FooterArchive = props => {
  const { themeStyle=style } = props;

  return (
    <div className={themeStyle}>
      <h4>archive</h4>
      <ul>
        <li><h4><Link to='/archive/#2018'>2018</Link></h4></li>
        <li><h4><Link to='/archive/#2017'>2017</Link></h4></li>
      </ul>
    </div>
  );
};

export default FooterArchive;
