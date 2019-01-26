import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import style from './styles/archive';

const Archive = props => {
  const { posts, year, themeStyle=style } = props;
  
  return (
    <div className={themeStyle}>
      <h2 id={year}>{year}</h2>
      {posts.filter(post => post.fields.year === year).map((post, index) => (
        <li key={index}>
          <span>{post.frontmatter.date} -</span>
          <Link to={post.fields.slug} dangerouslySetInnerHTML={{ __html: post.frontmatter.title}} />
        </li>
      ))}
    </div>
  );
};

Archive.propTypes = {
  posts: PropTypes.array,
  year: PropTypes.string,
};

export default Archive;
