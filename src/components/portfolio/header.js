import React from 'react';

import style from './styles/header';

const Header = props => {
  const { toHome, themeStyle=style } = props;

  return (
    <header className={themeStyle}>
      <button onClick={toHome}><h1>if.</h1></button>
      <a href='/code'>blog</a>
    </header>
  );
};

export default Header;
