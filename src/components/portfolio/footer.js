import React from 'react';

import style from './styles/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Footer = props => {
  const { themeStyle=style } = props;

  return (
    <footer className={themeStyle}>
      <section>
        <a href='https://www.twitter.com/inadeqt_futurs'>
          <FontAwesomeIcon icon={['fab', 'twitter']} size='lg' />
        </a> 
        <a href='https://github.com/inadeqtfuturs'>
          <FontAwesomeIcon icon={['fab', 'github']} size='lg' />
        </a>
        <a href='https://codepen.io/inadequatefutures/'>
          <FontAwesomeIcon icon={['fab', 'codepen']} size='lg' />
        </a>
      </section>
      <a href='mailto:alexj.christie@gmail.com'>contact</a>
    </footer>
  );
};

export default Footer;
