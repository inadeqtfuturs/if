import React from 'react';

import style from './styles/header';
import ThemeToggle from './themeToggle';

const Header = props => {
  const { toHome, toggleTheme, dark,
          themeStyle=style } = props;

  return (
    <header className={themeStyle}>
      <button onClick={toHome}><h1>if.</h1></button>
      <ThemeToggle 
        toggleTheme={toggleTheme}
        dark={dark}
      />
    </header>
  );
};

export default Header;
