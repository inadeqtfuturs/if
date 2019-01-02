import { css } from 'emotion';

const indexPagination = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  a {
    text-decoration: none;
    transition: all .5s ease-in-out;
    border: 1px solid #a0a0a0;
    color: #666;
    padding: .5rem 2rem;
    font-weight: 300;
  }
  a:hover {
    color: #666;
    border: 1px solid #333;
    opacity: 1;
  }
`;

export default indexPagination;
