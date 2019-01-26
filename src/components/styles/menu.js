import { css } from 'emotion';

const menu = css`
  display: flex;
  @media all and (max-width: 40rem) {
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: -10;
      text-align: center;
      background-color: transparent;
      transition: all .3s ease-out;
      ul {
        list-style: none;
        padding-left: 0;
        opacity: 0;
        transition: opacity .3s ease-out;
        li {
          margin-bottom: .5rem;
        }
        li a {
          font-family: var(--fontFamily);
          font-size: 1.5rem;
        }
        li ul {
          margin-top: .5rem;
        }
      }
      svg {
        display: none;
      }
      &.isActive {
        z-index: 10;
        opacity: 1;
        background-color: var(--textColor);
        color: var(--lightTextColor);
        ul {
          opacity: 1;
        }
      }   
    }
    .menuIcon {
      display: flex;
      z-index: 20;
      .iconBox {
        margin: .5rem;
        width: 1rem;
        &:after, &:before, & div {
          background-color: var(--linkColor);
          border-radius: .125rem;
          content: '';
          display: block;
          height: .125rem;
          margin: .25rem 0;
          transition: all .3s ease-in-out;
        }
        &.isActive:before {
          transform: translateY(.25rem) rotate(135deg);
          background-color: var(--lightTextColor);
        }
        &.isActive:after {
          transform: translateY(-.5rem) rotate(-135deg);
          background-color: var(--lightTextColor);
        }
        &.isActive div {
          transform: scale(0);
        }
      }
    };
  }
  @media all and (min-width: 40rem) {
    .menu {
      ul {
        list-style: none;
        display: flex;
        padding-left: 0;
        li {
          position: relative;
          margin-left: 1rem;
          &:first-child {
            margin-left: 0rem !important;
          }
        };
        li a:hover {
          box-shadow:0 1px 0 0 currentColor;
          opacity:1;
        };
        li ul {
          display:none;
          position:absolute;
          top:100%;
          white-space:nowrap;
          background-color: var(--backgroundColor);
        };
        li:hover > ul {
          display: block;
          position: absolute;
        };
        li ul li {
          clear: both;
          margin-left: 0rem;
        };
      };
    }
    .menuIcon {
      display: none;
    };
  };
`;

export default menu;
