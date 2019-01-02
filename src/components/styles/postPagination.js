import { css } from 'emotion';

const postPagination = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  border-top: thin solid #666;
  .next, .previous {
    max-width: 45%;
  }
  .previous {
    text-align:right;
  }
  p {
    margin: 0;
  }
`;

export default postPagination;
