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
        <a 
          href='https://www.twitter.com/inadeqt_futurs'
          aria-label='twitter'>
          <FontAwesomeIcon icon={['fab', 'twitter']} size='lg' />
        </a> 
        <a 
          href='https://github.com/inadeqtfuturs'
          aria-label='github'>
          <FontAwesomeIcon icon={['fab', 'github']} size='lg' />
        </a>
        <a 
          href='https://codepen.io/inadequatefutures/'
          aria-label='codepen'>
          <FontAwesomeIcon icon={['fab', 'codepen']} size='lg' />
        </a>
      </section>
      <section className={'links'}>
        <a href='/code'>blog</a>
        {` // `}
        <a href='mailto:alexj.christie@gmail.com'>contact</a>
      </section>
    </footer>
  );
};

export default Footer;
