import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

export const FullWidth = ({ articlesContent }) => {
  const firstElement = articlesContent[0];
  const othersElements = articlesContent.slice(1, articlesContent.length);
  const href = "/learnmore";

  return (
    <>
      <div class="learn-more-block-fullwidth">
        <Link href={`/${firstElement.code}`}>
          <a></a>
        </Link>
        {/* First Element */}
        <div class="learn-more-block-fullwidth-half-1">
          <div class="learn-more-block-fullwidth-half-img">
            <Image
              src={`${firstElement.previewPicture.src}`}
              width={732}
              height={426}
              priority
            />
            <div class="learn-more-block-fullwidth-description-mob">
              <div class="learn-more-description">
                <Link href="/AboutMelatonin">
                  <a>
                    Что нужно знать <br />
                    <span>
                      <b>о мелатонине</b>
                    </span>
                  </a>
                </Link>
              </div>
              <div class="learn-more-further">
                <Link priority href={`/${firstElement.code}`}>
                  <a>ЧИТАТЬ ДАЛЕЕ</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="learn-more-block-fullwidth-half-2 mob-none">
          <div class="learn-more-description">
            <Link priority href={`/${firstElement.code}`}>
              <a>{ReactHtmlParser(firstElement.name)}</a>
            </Link>
          </div>
          <div class="learn-more-further">
            <Link href={`/${firstElement.code}`}>
              <a>ЧИТАТЬ ДАЛЕЕ</a>
            </Link>
          </div>
        </div>
      </div>
      <div class="learn-more-block-row">
        {/* SecondElement */}
        {othersElements.map((a) => (
          <div key={a.id} class="learn-more-block-item">
            <Link href={`/${a.code}`}>
              <a></a>
            </Link>
            <div class="learn-more-grid-item-img">
              <img src={a.previewPicture.src} alt=""/>
            </div>
            <div class="learn-more-block-description">
              <Link href={`/${a.code}`}>
                <a>{ReactHtmlParser(a.name)}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
