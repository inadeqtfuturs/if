import React from 'react'

import style from './styles/footerSearch';

const FooterSearch = props => {
  const { themeStyle=style } = props;

  return (
    <div className={themeStyle}>
      <h4>search</h4>
      <form action='/search/' method='get'>
        <input
          type='text'
          placeholder='search...'
          name='q'
          aria-label='search' />
      </form>
    </div>
  );
};

export default FooterSearch;
