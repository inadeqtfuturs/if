import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [40, 62];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}rem)`));

const slider = css`
  align-self: center;
  ${mq({
    width: ['100%', '100%', '85%']
  })}
  display: grid;
  grid-template-rows: repeat(2, auto);
  .article {
    position: relative;
    min-height: 62vh;
    width: 100%;
    display: block;
    article {
      position: absolute;
      height: 100%;
      width: 100%;
      display: flex;  
      ${mq({
        flexDirection: ['column', 'column', 'row-reverse'],
        alignItems: ['flex-start', 'flex-start', 'center'],
      })}
      justify-content: space-between;
      figure {
        flex-basis: 65%;
        width: 100%;
        ${mq({
          marginBottom: ['1rem', '1.5rem', '0'],
        })}
        .gatsby-image-wrapper {
          box-shadow: -5px 0px 15px 1px #aaaaaa;
        }
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
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 250ms ease 250ms;
  }
  .fade-enter-done {
    opacity: 1;
  }
  .fade-exit {
      opacity: 1;
  }
  .fade-exit.fade-exit-active {
      opacity: 0;
      transition: opacity 250ms ease;
  }
  .fade-exit-done {
    opacity: 0;
  }
`;

export default slider;
