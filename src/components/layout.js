import React from 'react';

import Branding from './branding';
import Footer from './footer';
import FooterArchive from './footerArchive';
import FooterSearch from './footerSearch';
import Header from './header';
import Menu from './menu';

import './styles/variables';
import './styles/global';
import style from './styles/layout';

import { config, menu } from '../../content/meta/siteConfig';

const Layout = props => {
  const { children, themeStyle=style } = props;

  return (
    <div className={themeStyle}>
      <Header>
        <Branding title={config.siteTitle} />
        <Menu items={menu} />
      </Header>
      {children}
      <Footer>
        <FooterSearch />
        <FooterArchive />
      </Footer>
    </div>
  );
};

export default Layout;
