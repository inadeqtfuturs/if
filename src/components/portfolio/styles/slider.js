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
  div {
    display: flex;
    ${mq({
      alignItems: ['center', 'center', 'flex-end']
    })}
    .article {
      position: relative;
      min-height: 65vh;
      width: 100%;
      display: flex;
      align-items: center;
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
          a {
            text-decoration: none;
            padding: .5rem 2rem;
            ${mq({
              margin: ['.5rem 0rem', '1rem 0rem', '1rem 0rem'],
              fontSize: ['.75rem', '1rem', '1rem'],
            })}
            transition: all .5s ease-in-out;
            border: 1px solid var(--linkColor);
            color: var(--linkColor);
            &:hover {
              color: var(--linkColor);
              border: 1px solid var(--textColor);
              background: var(--backgroundColor);
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .portfolio-nav {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    button {
      ${mq({
        padding: ['1rem .5rem', '4rem .5rem', '.5rem 2rem'],
        margin: ['.5rem 0rem', '1rem 0rem', '1rem 0rem'],
        fontSize: ['.75rem', '1rem', '1rem'],
      })}
      transition: all .5s ease-in-out;
      color: var(--linkColor);
      background: var(--lightTextColor);
      border: 1px solid var(--lightTextColor);
      opacity: .5;
      &:hover {
        opacity: .8;
      }
    }
  }
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      padding: .5rem 2rem;
      background: none;
      ${mq({
        margin: ['.5rem 0rem', '1rem 0rem', '1rem 0rem'],
        fontSize: ['.75rem', '1rem', '1rem'],
      })}
      transition: all .5s ease-in-out;
      border: 1px solid var(--linkColor);
      color: var(--linkColor);
      &:hover {
        color: var(--linkColor);
        border: 1px solid var(--textColor);
        background: var(--backgroundColor);
        opacity: 1;
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
