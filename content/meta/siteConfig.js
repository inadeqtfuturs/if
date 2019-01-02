
const config = {
  name: 'inadequate futures',
  url: 'www.inadequatefutures.com',
  logo: '../images/logo.svg',
  /* meta tags */
  siteTitle: 'inadequate futures',
  siteDescription: 'posthumanism and ethics for enacting the future',
  siteKeywords: 'critical theory, posthumanism, new materialism, alex christie, chicago',
  siteImage: ' ', // GLOBAL IMAGE GOES HERE
}

const menu = [
  { type: 'text', label: 'home', to: '/' },
  { type: 'text', label: 'about', to: '/about' },
  { type: 'text', label: 'teaching', to: '/teaching', subItems: [
    { type: 'text', label: 'teaching philosophy', to: '/teaching' },
    { type: 'text', label: 'course descriptions', to: '/classes' },
  ]},
  { type: 'text', label: 'cv', to: '/cv' },
  { type: 'text', label: 'code', to: '/code' },
  { type: 'icon', label: 'twitter', to: 'https://www.twitter.com/inadeqt_futurs' },
  { type: 'icon', label: 'instagram', to: 'https://www.instagram.com/if_exp/' }
]

module.exports = {
  config: config,
  menu: menu
}
