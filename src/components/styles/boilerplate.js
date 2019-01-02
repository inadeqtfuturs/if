import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [960];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const title = css`

`;

export default title;
