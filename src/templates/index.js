import React from 'react'
import PropTypes from 'prop-types';

import IndexPagination from '../components/indexPagination';
import Main from '../components/main';
import Layout from '../components/layout';
import PostExcerpt from '../components/postExcerpt';
import SEO from '../components/seo';

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
