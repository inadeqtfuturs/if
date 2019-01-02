import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [50];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const postExcerpt = css`
display: grid;
grid-template-columns: repeat(12, minmax(0,1fr));
  .info {
    margin-bottom: 1rem;
    ${mq({
      gridColumn: ['1/13', '1/4'],
    })};
    a {
      text-decoration: none;
    }
    h2 {
      margin-bottom: .5rem;
    }
    p {
      line-height: 1rem;
      margin-bottom: .5rem;
    }
  };
  .main {
    ${mq({
      gridColumn: ['1/13', '5/13'],
    })};
    .excerpt {
      a {
        text-decoration: none;
        border-bottom: 1px solid #666;
      }
      a:hover {
        box-shadow:0 1px 0 0 currentColor;
        opacity:1
      }
    }
  };
margin-bottom: .666rem;
padding-bottom: .666rem;
border-bottom: thin solid #666;
`;

export default postExcerpt;
