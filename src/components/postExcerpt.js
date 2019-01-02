import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import TagList from './tagList';

import style from './styles/postExcerpt';

const PostExcerpt = ({ post }, props) => {
  const { fields, frontmatter, html } = post;
  let excerpt = html.split("<!--more-->")[0]
  const { themeStyle=style } = props;

  return (

    <article className={themeStyle}>
      <div className={'info'}>
        <Link to={fields.slug}>
          <h2 dangerouslySetInnerHTML={{ __html: frontmatter.title }} />
        </Link>
        <i><p>{frontmatter.date}</p></i>
        <i><p>{frontmatter.author}</p></i>
      </div>
      <div className={'main'}>
        <div className={'excerpt'}>
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          {(html.length - excerpt.length) > 20 ? (
            <p><i><Link to={fields.slug}>read more...</Link></i></p>
          ) : ''}
        </div>
        <TagList tags={frontmatter.tags} />
      </div>
    </article>
  );
};

PostExcerpt.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
};

export default PostExcerpt;
