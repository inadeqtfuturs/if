import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import kebabCase from "lodash/kebabCase";

import style from './styles/tagList';

const TagList = ({ tags }, props) => {
  const { themeStyle=style } = props;

  return (
    <ul className={themeStyle}>
      <li><p><i>tags: </i></p></li>
      {tags.sort(function(a,b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if( a === b) return 0;
        return a < b ? -1 : 1;
      }).map((tag, index, arr) => {
        return (
          <li key={index}>
            <Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>{index !== arr.length - 1 ? "," : ""}
          </li>
        )
      })}
    </ul>
  );
};

TagList.propTypes = {
  tags: PropTypes.array,
};

export default TagList;
