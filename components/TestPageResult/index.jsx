import React from "react";
import Repost from "../Repost";
import Link from "next/link";
import Image from "next/image";

const TestPageResult = ({ data, route }) => {
  return (
    <div className="test-page-result-wrapper">
      <div className="test-page-result">
        <Image
          src={data?.emoji.src}
          width={140}
          height={140}
          alt=""
          className="test-page-result-image"
        />
        <p className="test-page-heading-description">{data?.title}</p>

        <Repost route={route} />
        <div className="app__navbar-line" />
        <div className="test-page-result-article">{data?.linkTitle}</div>
        <Link href={`${data?.result}`}>
          <a className="default-button white bg">
            <span className="default-button__text">Читать статью</span>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default TestPageResult;
