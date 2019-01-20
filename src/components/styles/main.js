import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 50, 62, 80];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const main = css`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  ${mq({
    width: ['100%', '38rem', '48rem', '58rem', '74rem'],
    marginTop: ['.5rem', '.5rem', '1rem', '1rem', '2rem'],
  })}
`;

export default main;
