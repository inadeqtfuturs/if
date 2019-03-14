import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 62];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const portfolio = css`
  align-self: center;
  display: grid;
  width: 100%;
  ${mq({
    height: ['calc(90vh - 2rem)', 'calc(90vh - 4rem)', 'calc(90vh - 8rem)', ],
  })}
  .article {
    position: relative;
    display: flex;
    justify-content: center;
    section {
      position: absolute;
    }
  }
  .main-fade-enter {
    opacity: 0;
  }
  .main-fade-enter.main-fade-enter-active {
      opacity: 1;
      transition: opacity 500ms ease 500ms;
  }
  .main-fade-enter-done {
    opacity: 1;
  }
  /* exit */
  .main-fade-exit {
      opacity: 1;
  }
  .main-fade-exit.main-fade-exit-active {
      opacity: 0;
      transition: opacity 500ms ease;
  }
  .main-fade-exit-done {
    opacity: 0;
  }
`;

export default portfolio;
