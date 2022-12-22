import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

export const Grid2 = ({ articlesContent }) => {
  const firstElement = articlesContent[0];
  const secondElement = articlesContent[1];
  const othersElements = articlesContent.slice(2, articlesContent.length);
  // const href="/learnmore"

  return (
    <>
      <div class="grid-2-block">
        {/* Second */}
        <div class="learn-more-grid-item learn-more-block-2-top">
          <Link href={`/${secondElement.code}`}>
            <a></a>
          </Link>
          <div class="learn-more-grid-item-img">
            <Image
              priority
              src={`${secondElement.previewPicture.src}`}
              layout="fill"
            />
          </div>
          <div class="learn-more-block-description">
            {ReactHtmlParser(secondElement.name)}
          </div>
        </div>
        {/* First */}
        <div class="learn-more-grid-1-item-2 learn-more-block-2-top">
          <Link href={`/${firstElement.code}`}>
            <a></a>
          </Link>
          <div class="learn-more-grid-1-item-2-img">
            <Image
              priority
              src={`${firstElement.previewPicture.src}`}
              width={952}
              height={436}
            />
            <div class="learn-more-grid-1-item-2-description">
              {ReactHtmlParser(firstElement.name)}
            </div>
            <div class="learn-more-grid-1-item-2-further">
              <Link href={`/${firstElement.code}`}>
                <a>ЧИТАТЬ ДАЛЕЕ</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="learn-more-block-grid">
        {othersElements.map((a) => (
          <div key={a.id} class="learn-more-block-item">
            <Link href={`/${a.code}`}>
              <a></a>
            </Link>
            <div class="learn-more-grid-item-img">
              <Image priority src={`${a.previewPicture.src}`} layout="fill" />
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
