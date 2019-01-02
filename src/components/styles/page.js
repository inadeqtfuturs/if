import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 50, 62, 80];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const page = css`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  .hide {
    display: none;
  }
  ${mq({
    paddingTop: ['.5rem', '.5rem', '.5rem', '1rem', '2rem'],
    width: ['null', '39rem', '48rem', '58rem', '74rem'],
  })};
  .page {
    }
    p strong {
      margin-bottom: 0;
    }
    ul, ol {
      margin-left: 0rem;
      list-style: none;
      margin-bottom: 1rem;
    }
    ul li ul {
      margin-left: 2rem;
      margin-bottom: 0rem;
    }
    th, td {
      vertical-align: top;
      text-align: left;
    }
    td:first-child {
      padding-right: 1rem;
      width: 8rem;
    }
  }
  .cv {
    ${mq({
      width: ['', '80%', '80%', '80%'],
      marginLeft: ['', '10%', '10%', '10%']
    })}
    h2, h4 {
      margin-bottom:.333rem;
      text-align: center;
      line-height: 1.2;
      letter-spacing: .02rem;
    }
    h3 {
      font-size:1.3rem;
      font-variant:small-caps;
      margin-top: 1rem;
    }
    ul, ol, li, p, a, td {
      font-size: .8rem;
      line-height: 1.3rem;
    }
    li p {
      margin-bottom: 0;
    }
  }
`;

export default page;
