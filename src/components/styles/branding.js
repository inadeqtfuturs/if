import { css } from 'emotion';

import facepaint from 'facepaint';

const breakpoints = [40, 50, 62, 80];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const brandingstyle = css`
  display: flex;
  font-family: var(--fontFamily);
  ${mq({
    marginBottom: ['.5rem', '.5rem', '0rem', '0rem', '0rem'],
    alignSelf: ['center', '', '', '', '']
  })};
  h1 {
    font-size: 2rem;
    align-self: center;
    font-weight: 100;
    line-height: 2rem;
  }
`;

export default brandingstyle;
