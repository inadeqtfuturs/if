import React from 'react';

import style from './styles/wrapper'

const Wrapper = props => {
  const { children, themeStyle=style } = props;

  return (
    <main className={themeStyle}>{children}</main>
  );
};

export default Wrapper;
