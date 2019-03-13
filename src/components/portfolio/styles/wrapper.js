import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 62];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${mq({
    width: ['calc(v100vww - 2rem)', 'calc(100vw - 4rem)', 'calc(100vw - 8rem)', ],
    height: ['calc(100vh - 2rem)', 'calc(100vh - 4rem)', 'calc(100vh - 8rem)', ],
    margin: ['1rem', '2rem', '4rem']
  })}
`;

export default wrapper;
