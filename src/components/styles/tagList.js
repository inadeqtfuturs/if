import { css } from 'emotion';

const tagList = css`
  list-style: none;
  p {
    margin: 0
  }
  li {
    display: inline-block;
    margin-right: .25rem;
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    opacity: .75;
  }
`;

export default tagList;
