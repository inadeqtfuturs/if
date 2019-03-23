import { css } from 'emotion';

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  a {
    text-decoration: none;
  }
  button {
    border-color: transparent;
    background: transparent;
    color: var(--linkColor);
    cursor: pointer;
  }
`;

export default header;
