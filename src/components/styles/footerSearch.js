import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [50];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const footerSearch = css`
  ${mq({
    gridColumn: ['1/4', '1/2'],
    marginBottom: ['1rem', '']
  })};
  h4 {
    margin-bottom: 0;
    height: 24px;
  }
  input {
    border-width: 0;
    border-bottom: 1px solid #666;
    width: 14rem;
    max-width: 100%;
    ${mq({
      fontSize: ['.85rem', '1rem']
    })};
    font-family: var(--fontFamilyPara);
    font-style: italic;
  };
  input:focus {
    outline: 0;
    box-shadow: 0 1px;
  };
`;

export default footerSearch;
