import React from 'react'

import style from './styles/footerSocial';

const FooterSocial = props => {
  const { items, themeStyle=style } = props;

  return (
    <div className={themeStyle}>
      <h4>social</h4>
      <ul>
        {items.map((item, index) => {
          const { label, to } = item;

          return (
            <li key={index}><a href={to}>{label}</a></li>
          )
        })}
      </ul>
    </div>
  );
};

export default FooterSocial;
