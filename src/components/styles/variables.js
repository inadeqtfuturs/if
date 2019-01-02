import 'typeface-open-sans';
import 'typeface-noto-serif';
import { injectGlobal } from 'emotion';

const variables = injectGlobal`
  :root {
    --textColor: #111;
    --lightTextColor: #ddd;
    --superLightTextColor: #eee;

    --linkColor: #666;
    --hoverLinkColor: #555;

    --fontFamily: "Open Sans", sans-serif;
    --fontFamilyPara: "Georgia";

    --backgroundColor: #fff;

    --scrollBarThumb: #eaeaea;
    --scrollBarTrack: #f9f9f9;
    --scrollBarWidth: 1px;
  }
`;

export default variables;
