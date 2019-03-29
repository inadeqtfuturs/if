import React from 'react'
import PropTypes from 'prop-types';

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

FooterSocial.propTypes = {
  times: PropTypes.object,
  item: PropTypes.object,
  label: PropTypes.string,
  to: PropTypes.string,
}

export default FooterSocial;
