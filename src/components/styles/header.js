import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 50, 62, 80];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem auto .5rem auto;
  ${mq({
    alignItems: ['baseline', 'center', 'center', 'center', 'center'],
    width: ['100%', '38rem', '48rem', '58rem', '74rem'],
  })};
  a {
    text-decoration: none;
  }
`;

export default header;
