import React from 'react';
import PropTypes from 'prop-types';

import Main from '../components/main';
import Layout from '../components/layout';
import PostExcerpt from '../components/postExcerpt';
import SEO from '../components/seo';
import TagPagination from '../components/tagPagination';

const TagPage = ({ pageContext }) => {
  const { posts, tag, pagesSum, page } = pageContext;

  return (
    <Layout>
      <Main>
        <h2>tagged with {tag}:</h2>
        <div>
          {posts.map((post, index) =>
            <PostExcerpt
              key={index}
              post={post}
            />
          )}
        </div>
        <TagPagination
          tag={tag}
          page={page}
          pagesSum={pagesSum}
        />
      </Main>
      <SEO 
        title={'inadequate futures: posts tagged with ' + tag}
        slug={'/tag/' + tag}
      />
    </Layout>
  );
};

TagPage.propTypes = {
  posts: PropTypes.object,
  tag: PropTypes.string,
  pagesSum: PropTypes.number,
  page: PropTypes.number
}

export default TagPage;