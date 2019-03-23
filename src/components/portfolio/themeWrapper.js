import React from 'react';
import { Global, css } from '@emotion/core'

import { darkUI, lightUI } from './styles/themes'

const ThemeWrapper = props => {
  const { children, dark } = props;

  return (
    <>
      <Global
        styles={css`
        :root {
          --textColor: ${dark ? darkUI.textColor : lightUI.textColor};
          --lightTextColor: ${dark ? darkUI.lightTextColor : lightUI.lightTextColor};
          --superLightTextColor: ${dark ? darkUI.superLightTextColor : lightUI.superLightTextColor};
    
          --linkColor: ${dark ? darkUI.linkColor : lightUI.linkColor};
          --hoverLinkColor: ${dark ? darkUI.hoverLinkColor : lightUI.hoverLinkColor};
          --shadowColor: ${dark ? darkUI.shadowColor : lightUI.shadowColor};
    
          --backgroundColor: ${dark ? darkUI.backgroundColor : lightUI.backgroundColor};
        }
        `}
      />
      {children}
    </>
  );
};

export default ThemeWrapper;
