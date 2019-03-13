import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 62];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const home = css`
  ${mq({
    width: ['100%', '100%', '65%'],
  })}
  .title:after {
    border-bottom: 1px solid var(--linkColor);
    width: 4rem;
    content: '';
    height: 1rem;
    display: block;
  }
  button {
    margin: 1rem .5rem;
    padding: .5rem 2rem;
    background: none;
    ${mq({
      fontSize: ['.75rem', '1rem', '1rem'],
    })}
    transition: all .5s ease-in-out;
    border: 1px solid #a0a0a0;
    color: #666;
    &:hover {
      color: #666;
      border: 1px solid #111;
      background: #fff;
      opacity: 1;
    }
  }
`;

export default home;
