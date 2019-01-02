import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 50, 62, 80];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const header = css`
  display: flex;
  margin: 2rem auto .5rem auto;
  align-items: baseline;
  ${mq({
    flexDirection: ['column', 'row', 'row', 'row', 'row'],
    justifyContent: ['center', 'space-between', 'space-between', 'space-between', 'space-between'],
    width: ['null', '39rem', '48rem', '58rem', '74rem'],
  })};
  a {
    text-decoration: none;
  }
`;

export default header;
