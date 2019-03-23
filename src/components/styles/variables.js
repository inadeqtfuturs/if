import 'typeface-open-sans';
import 'typeface-noto-serif';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --textColor: #333;
    --lightTextColor: #ccc;
    --superLightTextColor: #ddd;

    --linkColor: #666;
    --hoverLinkColor: #555;
    --shadowColor: #aaa;

    --fontFamily: "Open Sans", sans-serif;
    --fontFamilyPara: "Georgia";

    --backgroundColor: #fcfcfc;

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 1px;
  }
`;

export default variables;
