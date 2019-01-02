import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 50, 62, 80];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const footer = css`
  display: flex;
  margin: 2rem auto 2rem auto;
  flex-direction: row;
  justify-content: space-between;
  ${mq({
    width: ['null', '39rem', '48rem', '58rem', '74rem'],
    minWidth: ['100%', '0', '0%', '0%', '0%']
  })};
`;

export default footer;
