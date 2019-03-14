import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [960];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const portfolio = css`
  .main-section {
    background-color: red;
    position: relative;
    width: 100%;
    display: block;
    section {
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }
  .main-fade-enter {
    opacity: 0;
  }
  .main-fade-enter.main-fade-enter-active {
      opacity: 1;
      transition: opacity 5000ms ease 5000ms;
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
      transition: opacity 5000ms ease;
  }
  .main-fade-exit-done {
    opacity: 0;
  }
`;

export default portfolio;
