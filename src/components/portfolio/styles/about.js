import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 62];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const about = css`
  ${mq({
    width: ['100%', '100%', '65%'],
    flexDirection: ['column-reverse', 'row', 'row'],
    overflow: ['scroll', 'auto', 'auto'],
  })}
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  article {
    flex-basis: 50%;
    h1 {
      ${mq({
        fontSize: ['1.25rem', '1.5rem', '2.5rem'],
      })}
      &:after {
        border-bottom: 1px solid var(--linkColor);
        width: 4rem;
        content: '';
        ${mq({
          height: ['.5rem', '1rem', '1rem'],
        })}
        display: block;
      }
    }
    h3 {
      margin-bottom: .125rem;
      &:after {
        border-bottom: 1px solid var(--linkColor);
        width: 2rem;
        content: '';
        height: .75rem;
        display: block;
      }
    }
    p {
     ${mq({
       marginBottom: ['.5rem', '1rem', '1rem']
     })}
    }
    button {
      padding: .5rem 2rem;
      background: none;
      ${mq({
        margin: ['.5rem 0rem', '1rem .5rem', '1rem .5rem'],
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
  }
  figure {
    flex-basis: 40%;
    width: 100%;
    ${mq({
      marginBottom: ['1rem', '0', '0'],
    })}
`;

export default about;
