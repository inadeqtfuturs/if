import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 62];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const slider = css`
  ${mq({
    width: ['100%', '100%', '85%']
  })}
  article {
    display: flex;
    ${mq({
      flexDirection: ['column', 'column', 'row-reverse'],
      alignItems: ['flex-start', 'flex-start', 'center'],
    })}
    justify-content: space-between;
    figure {
      flex-basis: 65%;
      width: 100%;
      box-shadow: -5px 0px 15px 1px #aaaaaa;
      ${mq({
        marginBottom: ['1rem', '1.5rem', '0'],
      })}
    }
    header {
      flex-basis: 25%;
      h1 {
        ${mq({
          fontSize: ['1.25rem', '1.5rem', '2.5rem'],
        })}
        &:after {
          border-bottom: 1px solid var(--linkColor);
          width: 4rem;
          content: '';
          height: 1rem;
          display: block;
        }
      }
      h4 {
        margin-bottom: 0rem;
        ${mq({
          fontSize: ['.75rem', '.85rem', '.85rem'],
        })}
        &:after {
          border-bottom: 1px solid var(--linkColor);
          width: 2rem;
          content: '';
          height: .5rem;
          display: block;
        }
      }
    }
  }
  footer {
    display: flex;
    ${mq({
      flexDirection: ['column', 'row', 'row'],
    })}
    justify-content: space-between;
    nav {
      ${mq({
        display: ['flex', null, null],
        justifyContent: ['space-between', null, null],
      })}
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
  }
`;

export default slider;
