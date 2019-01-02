import React from 'react'
import PropTypes from 'prop-types';

import IndexPagination from '../components/IndexPagination';
import Main from '../components/Main';
import Layout from '../components/Layout';
import PostExcerpt from '../components/PostExcerpt';
import SEO from '../components/SEO';

export default function Pages ({ pageContext }) {
  const { posts, prevPath, nextPath } = pageContext;

  return (
    <Layout>
      <Main>
        <div>
          {posts.map((post, index) =>
            <PostExcerpt
              key={index}
              post={post}
            />
          )}
        </div>
        <IndexPagination
          prevPath={prevPath}
          nextPath={nextPath}
        />
      </Main>
      <SEO />
    </Layout>
  );
};

Pages.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
};
