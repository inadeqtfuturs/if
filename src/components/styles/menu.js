import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [50];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const menu = css`
  display: flex;
  align-items: center;
  ${mq({
    justifyContent: ['center', 'flex-end'],
  })};
  ul {
    list-style: none;
    display: flex;
    padding-left: 0;
    li {
      position: relative;
      margin-left: 1rem;
      &:first-child {
        margin-left: 0rem !important;
      }
    };
    li a:hover {
      box-shadow:0 1px 0 0 currentColor;
      opacity:1;
    };
    .icon a:hover {
      box-shadow:none;
      opacity:.7;
    };
    li ul {
      display:none;
      position:absolute;
      top:100%;
      white-space:nowrap;
      background-color: var(--backgroundColor);
    };
    li:hover > ul {
      display: block;
      position: absolute;
    };
    li ul li {
      clear: both;
      margin-left: 0rem;
    };
  };
`;

export default menu;
