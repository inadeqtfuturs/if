import React from 'react'

import Main from '../components/Main';
import Layout from '../components/Layout';
import PostExcerpt from '../components/PostExcerpt';
import SEO from '../components/SEO';
import TagPagination from '../components/TagPagination';

export default ({ pageContext }) => {
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
