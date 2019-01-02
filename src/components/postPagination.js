import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import style from './styles/postPagination';

const PostPagination = ({ next, previous }, props) => {
  const { themeStyle=style } = props;

  return (
    <div className={themeStyle}>
      { previous ? (
        <div className={'next'}>
          <p><i>next post</i></p>
          <Link to={previous.fields.slug}>
            <p dangerouslySetInnerHTML={{ __html: previous.frontmatter.title}} />
          </Link>
        </div>
      ) : (
        <span></span>
      )}
      {next ? (
        <div className={'previous'}>
          <p><i>previous post</i></p>
          <Link to={next.fields.slug}>
            <p dangerouslySetInnerHTML={{ __html: next.frontmatter.title}} />
          </Link>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}

PostPagination.propTypes ={
  next: PropTypes.object,
  previous: PropTypes.object,
};

export default PostPagination;
