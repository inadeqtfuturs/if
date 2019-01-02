import React from 'react';

import style from './styles/menu';

import MenuItem from './menuItem';

const Menu = props => {
  const { items, themeStyle=style } = props;

  return (
    <nav className={themeStyle}>
      <ul>
        {items.map(item => 
          <MenuItem item={item} />
        )}
      </ul>
    </nav>
  );
};

export default Menu;
