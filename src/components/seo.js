import React from 'react';
import Helmet from 'react-helmet';

import Icon from '../../content/images/favicon.ico'
import profile from '../../content/images/profile.jpg'

const SEO = props => {
  const baseUrl = 'https://www.inadequatefutures.com';

  const title = props.title || 'inadequate futures';
  const description = props.description || 'posthumanism and ethics for enacting the future';
  const keywords = props.tags + ',alex christie,chicago'
  || 'critical theory, posthumanism, new materialism, alex christie, chicago';
  const image = props.image ? props.image.publicURL : profile;
  const url = baseUrl + props.slug;

  return (
    <Helmet
      title={title.replace(/<(.|\n)*?>/g, '')}
      meta={[
        { name: 'author', content: `${title}` },
        { name: 'description', content: `${description}` },
        { name: 'keywords', content: `${keywords}` },
        { name: 'viewport', content: 'initial-scale=1.0, width=device-width'},
        {/* opengraph tags */},
        { property: 'og:url', content: `${url}` },
        { property: 'og:title', content: `${title}` },
        { property: 'og:description', content: `${description}` },
        { property: 'og:image', content: `${image}` },
        {/* twitter card tags */},
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: '@inadeqt_futurs' },
        { property: 'twitter:domain', content: `${url}` },
        { property: 'twitter:title', content: `${title}` },
        { property: 'twitter:description', content: `${description}` },
        { property: 'twitter:image', content: `${image}` },
      ]}
    >
      <html lang="en" />
      <link rel="shortcut icon" href={Icon} />
      <link  href="https://use.fontawesome.com/releases/v5.1.0/css/svg-with-js.css" rel="stylesheet" />
    </Helmet>
  );
};

export default SEO;
