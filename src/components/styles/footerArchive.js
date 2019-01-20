import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [50];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const footerSearch = css`
  ${mq({
    gridColumn: ['1/4', '3/4'],
    marginBottom: ['1rem', '']
  })};
  h4 {
    margin-bottom: 0;
    height: 24px;
  }
  ul {
    margin-left: 0;
  }
  ul li {
    position: relative;
    list-style: none;
    margin-bottom: 0;
  }
  ul li a {
    background-color:#fff;
    padding-right:.5rem;
    text-decoration: none;
  }
  // problem is here
  ul li a:after {
    margin-left: 2.25rem;
    border-top:1px dotted;
    content:"";
    display:block;
    position:relative;
    left: 0px;
    bottom: .75rem;
    z-index:-1;}
`;

export default footerSearch;
