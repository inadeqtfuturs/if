import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [30, 52];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const post = css`
  display: flex;
  flex-direction: column;
  .wide {
    ${mq({
      float: ['', 'right'],
      width: ['100%', '50%'],
      marginLeft: ['', '2rem'],
    })};
    margin-bottom: 1rem;
  }
  .tall {
    ${mq({
      float: ['', 'right'],
      width: ['100%', '33%'],
      marginLeft: ['', '2rem'],
    })};
    margin-bottom: 1rem;
  }
  ul, ol {
    margin-left: 1rem;
  }
  li p {
    margin-bottom: 0;
  }
`;

export default post;
