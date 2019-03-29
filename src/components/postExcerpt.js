import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import TagList from './tagList';

import style from './styles/postExcerpt';

const PostExcerpt = ({ post }, props) => {
  const { 
    fields: {
      slug
    }, 
    frontmatter: {
      title,
      date,
      author,
      tags
    }, html 
  } = post;
  let excerpt = html.split("<!--more-->")[0]
  const { themeStyle=style } = props;

  return (

    <article className={themeStyle}>
      <div className={'info'}>
        <Link to={slug}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
        <i><p>{date}</p></i>
        <i><p>{author}</p></i>
      </div>
      <div className={'main'}>
        <div className={'excerpt'}>
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          {(html.length - excerpt.length) > 20 ? (
            <p><i><Link to={slug}>read more...</Link></i></p>
          ) : ''}
        </div>
        <TagList tags={tags} />
      </div>
    </article>
  );
};

PostExcerpt.propTypes = {
  post: PropTypes.object,
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.array,
  html: PropTypes.string,
};

export default PostExcerpt;
