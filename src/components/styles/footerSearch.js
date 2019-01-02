import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const footerSearch = css`
  width: 40%;
  max-width: 100%;
  h4 {
    margin-bottom: 0;
    height: 24px;
  }
  input {
    border-width: 0;
    border-bottom: 1px solid #666;
    width: 16rem;
    max-width: 100%;
    ${mq({
      fontSize: ['.85rem', '1rem']
    })};
    font-style: italic;
  };
  input:focus {
    outline: 0;
    box-shadow: 0 1px;
  };
`;

export default footerSearch;
