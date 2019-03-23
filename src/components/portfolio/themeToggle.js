import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const ThemeToggle = props => {

  const { toggleTheme, dark } = props;
 
    return (
      <button onClick={toggleTheme}>
        {dark 
          ? <FontAwesomeIcon icon={['fas', 'sun']} size={"lg"} />
          : <FontAwesomeIcon icon={['fas', 'moon']} size={"lg"} />}
      </button>
    );
}

export default ThemeToggle;
