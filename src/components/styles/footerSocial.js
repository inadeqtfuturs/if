import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [50];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const footerSocial = css`
  ${mq({
    gridColumn: ['1/4', '2/3'],
    marginBottom: ['1rem', '']
  })};
  h4 {
    margin-bottom: 0;
    height: 24px;
  }
  ul {
    list-style: none;
    display: flex;
    padding-left: 0;
    li:after {
      content: '\00a0\00a0//\00a0\00a0'
    }
    li:last-child:after {
      content: ''
    }
  }
`;

export default footerSocial;
