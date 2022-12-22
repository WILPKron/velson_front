import { Helmet } from "react-helmet";
import ReactHtmlParser from "react-html-parser";

import Image from "next/image";
import Link from "next/link";

import OrderNow2 from "../../components/UI/OrderNow2";

const Article = ({ req }) => {
  const articleContent = req?.more;

  return (
    <div>
      <OrderNow2 />

      <div class="articles-header-container">
        <div class="articles-header-container-bg-img-1">
          <Image src={req?.detailPicture?.src} layout="fill" />
        </div>
        <div class="articles-header-description-wrapper">
          <h1 itemProp="name"> {ReactHtmlParser(req.name)}</h1>
          <div class="articles-header-text">
            {ReactHtmlParser(req.previewText)}
          </div>
        </div>
        <div class="down-arrow-circle"></div>
      </div>
      <div class="articles-container">
        <div id="articles-content" className="articles-wrapper">{ReactHtmlParser(req.detailText)}</div>

        <div class="articles-wrapper learn-more-block-row">
          {articleContent?.map((a) => (
            <div class="learn-more-block-item learn-more-block-item-margin">
              <Link href={`${a.code}`}>
                <a></a>
              </Link>
              <div class="learn-more-block-item-img">
                <Image priority src={`${a.previewPicture.src}`} layout="fill" />
              </div>
              <div class="learn-more-block-description">
                <span>{ReactHtmlParser(a.name)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
