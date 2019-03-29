import React from 'react';
import PropTypes from 'prop-types';

import Figure from './figure';

import style from './styles/page';

const Page = props => {
  const { themeStyle=style,
          title, image, display, width, html } = props;

  return (
    <article className={themeStyle}>
      <h2 dangerouslySetInnerHTML={{ __html: title}} />
      <div>
        {display && (
          <Figure 
            image={image}
            width={width}
          />
        )}
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  html: PropTypes.string,
}

export default Page;
