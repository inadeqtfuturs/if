
const config = {
  name: 'inadequate futures',
  url: 'www.inadequatefutures.com',
  logo: '../images/logo.svg',
  /* meta tags */
  siteTitle: 'inadequate futures',
  siteDescription: 'posthumanism and ethics for enacting the future',
  siteKeywords: 'critical theory, posthumanism, new materialism, alex christie, chicago',
}

const menu = [
  { label: 'home', to: '/' },
  { label: 'about', to: '/about' },
  { label: 'teaching', to: '/teaching', subItems: [
    { label: 'teaching philosophy', to: '/teaching' },
    { label: 'course descriptions', to: '/classes' },
  ]},
  { label: 'cv', to: '/cv' },
  { label: 'code', to: '/code' },
]

const social = [
  { label: 'twitter', to: 'https://www.twitter.com/inadeqt_futurs' },
  { label: 'instagram', to: 'https://www.instagram.com/if_exp/' },
  { label: 'github', to: 'https://github.com/inadeqtfuturs' }
]

module.exports = {
  config: config,
  menu: menu,
  social: social
}
