import React from 'react';

import style from './styles/header';

const Header = props => {
  const { themeStyle=style } = props;

  return (
    <header className={themeStyle}>
      <a href='/portfolio'><h1>if.</h1></a>
      <a href='/code'>blog</a>
    </header>
  );
};

export default Header;
