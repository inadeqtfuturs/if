import React from 'react';

import style from './styles/header';

const Header = props => {
  const { children, themeStyle=style } = props;

  return (
    <header className={themeStyle}>{children}</header>
  );
};

export default Header;
