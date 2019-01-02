import React from 'react';
import { Link } from 'gatsby';

import style from './styles/menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const Menu = props => {
  const { items, themeStyle=style } = props;

  return (
    <nav className={themeStyle}>
      <ul>
        {items.map(item => {
          const { type, label, to, subItems } = item;
          const textItem = ( <li key={label}><Link to={to}>{label}</Link></li> )
          const iconItem = ( <li key={label} className={'icon'}><Link to={to}><FontAwesomeIcon icon={['fab', label]} size='lg' /></Link></li> )

          const subMenu = (subItems &&
            subItems.map(subItem => {
              const { type, label, to } = subItem;

              return (
                type === 'text'
                  ? ( <li key={label}><Link to={to}>{label}</Link></li> )
                  : ( <li key={label} className={'icon'}><Link to={to}><FontAwesomeIcon icon={['fab', label]} size='lg' /></Link></li> )
              )
            })
          )

          return (
              subItems
                ? type === 'text'
                  ? ( <li key={label}>
                    <Link to={to}>
                      {label} <FontAwesomeIcon icon={['fas', 'angle-down']} size='sm' />
                    </Link>
                    <ul>
                      {subMenu}
                    </ul>
                  </li> )
                  : ( <li key={label} className={'icon'}>
                    <Link to={to}>
                      <FontAwesomeIcon icon={['fab', label]} size='lg' />
                      <FontAwesomeIcon icon={['fas', 'angle-down']} size='sm' />
                    </Link>
                    <ul>
                      {subMenu}
                    </ul>
                  </li> )
                : type === 'text'
                  ? ( textItem )
                  : ( iconItem )
          )
        })}
      </ul>
    </nav>
  );
};

export default Menu;
