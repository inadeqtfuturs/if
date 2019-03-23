import { css } from 'emotion';

const footer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 5vh;
  a {
    text-decoration: none;
  }
  section a {
    margin-right: 1rem;
  }
  .links a {
    margin-right: 0;
  }

`;

export default footer;
