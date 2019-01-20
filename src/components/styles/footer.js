import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 50, 62, 80];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const footer = css`
  margin: 2rem auto 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  ${mq({
    width: ['null', '38rem', '48rem', '58rem', '74rem'],
    minWidth: ['100%', '0', '0%', '0%', '0%']
  })};
`;

export default footer;
