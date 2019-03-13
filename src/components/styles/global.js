import { injectGlobal } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [62];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const global = injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
    color: var(--linkColor);
    background-color: var(--backgroundColor);
  }
  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4 {
    font-family: var(--fontFamily);
    font-weight: 100;
    line-height: 1;
    margin-bottom: .5rem;
  }
  p, a, li, td {
    font-family: var(--fontFamilyPara);
    line-height: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .hide {
    display: none;
  }
  ${mq({
    'h1': {
      fontSize: ['1.5rem', '2.5rem']
    },
    'h2': {
      fontSize: ['1.25rem', '1.75rem']
    },
    'h3': {
      fontSize: ['1rem', '1.25rem']
    },
    'h4': {
      fontSize: ['.85rem', '.85rem']
    },
    'p, li, a, td': {
      fontSize: ['.85rem', '.9rem']
    },
  })};
  a {
    color: var(--linkColor);
    transition: .3s;
  }

  /* Prism highlighting */
  /* Code blocks */
  pre[class*="language-"] {
    ${mq({
      fontSize: ['.65rem', '.75rem'],
      margin: ['0 0 1rem 0', '0 2rem 1rem 2rem']
    })}
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em .5em;
    ${mq({
      fontSize: ['.65rem', '.75rem']
    })}
  }
`;

export default global;
