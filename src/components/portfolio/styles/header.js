import { css } from 'emotion';

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  height: 5vh;
  a {
    text-decoration: none;
  }
  button {
    border-color: transparent;
    background: transparent;
  }
`;

export default header;
