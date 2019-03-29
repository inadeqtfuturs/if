import React from 'react';
import PropTypes from 'prop-types';

import Figure from './figure';

import style from './styles/post';

const Post = props => {
  const { themeStyle=style,
          title, date, author, image, display, width, html } = props;

  return (
    <article className={themeStyle}>
      <h2 dangerouslySetInnerHTML={{ __html: title}} />
      <p><i>{date} by {author}</i></p>
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

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  html: PropTypes.string,
}

export default Post;
