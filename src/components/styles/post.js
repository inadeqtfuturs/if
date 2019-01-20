import { css } from 'emotion';

const post = css`
  display: flex;
  flex-direction: column;
  ul, ol {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  ul ul {
    margin-bottom: 0;
  }
  li p {
    margin-bottom: 0;
  }
`;

export default post;
