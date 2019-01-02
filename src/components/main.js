import React from 'react';

import style from './styles/main';

const Main = props => {
  const { children, themeStyle=style } = props;

  return (
    <div className={themeStyle}>{children}</div>
  );
};

export default Main;
