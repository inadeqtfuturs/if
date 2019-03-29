import React from 'react';
import { cx } from 'emotion'
import PropTypes from 'prop-types'

import style from './styles/menu';

import MenuItem from './menuItem';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const { items, themeStyle=style } = this.props;

    return (
      <div className={themeStyle}>
        <nav className={cx('menu', [this.state.showMenu ? 'isActive' : ''])}>
          <ul>
            {items.map((item, index) => 
              <MenuItem 
                key={index}
                item={item} 
              />
            )}
          </ul>
        </nav>
        <div 
          className={'menuIcon'}
          onClick={() => this.toggleMenu()}>
          <div className={this.state.showMenu ? 'iconBox isActive' : 'iconBox'}>
              <div></div>
          </div>
        </div>
      </div>
    );
  };
};

Menu.propTypes = {
  item: PropTypes.object
}

export default Menu;
