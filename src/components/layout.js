import React from 'react';

import Branding from './Branding';
import Footer from './Footer';
import FooterArchive from './FooterArchive';
import FooterSearch from './FooterSearch';
import Header from './Header';
import Menu from './Menu';

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
