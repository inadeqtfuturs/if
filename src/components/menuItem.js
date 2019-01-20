import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const MenuItem = ({ item }) => {
  const { label, to, subItems } = item;

  return (
      subItems 
        ? ( 
          <li key={label}>
            <Link to={to}>
              {label} <FontAwesomeIcon icon={['fas', 'angle-down']} size='sm' />
            </Link>
            <ul>
              {subItems.map((subItem) => {
                const { label, to } = subItem;

                return (
                  <li key={label}><Link to={to}>{label}</Link></li>
                )
              })}
            </ul>
          </li> )
        : ( <li key={label}><Link to={to}>{label}</Link></li> )
  )
};

export default MenuItem;
