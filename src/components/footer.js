import React from 'react';

import style from './styles/footer';

const Footer = props => {
  const { children, themeStyle=style } = props;

  return (
    <footer className={themeStyle}>{children}</footer>
  );
};

export default Footer;
