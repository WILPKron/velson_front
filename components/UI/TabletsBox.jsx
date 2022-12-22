import React, { useEffect, useState, useRef } from "react";

import Image from "next/image";

import gsap from "gsap";

import PictureLight from "../../public/png_sequence/light-box-animation/box_00000-min.png";
import PictureDark from "../../public/png_sequence/dark-box-animation/box_00000-min.png";

const TabletsBox = (props) => {
  const { currentBox, setLoadingWhite } = props;

  const [screenWidth, setScreenWidth] = React.useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  });

  const [LoadImg, setLoadingImg] = useState(false);

  const isBreakpoint = false;

  const canvasFirst = useRef(null);
  const canvasSecond = useRef(null);

  const frameCount = 71;

  const frameSeq = {
    frame: 0,
  };

  const blackImages = [];
  const whiteImages = [];

  //

  const currentBlackFrame = (index) =>
    `/png_sequence/dark-box-animation/box_${(index + 1)
      .toString()
      .padStart(5, "0")}-min.png`;

  const currentWhiteFrame = (index) =>
    `/png_sequence/light-box-animation/box_${(index + 1)
      .toString()
      .padStart(5, "0")}-min.png`;

  //

  for (let i = 0; i < frameCount; i++) {
    if (process.browser && screenWidth > 500 && currentBox) {
      const img = document.createElement("img");

      img.src = currentBlackFrame(i);

      blackImages.push(img);
    }
  }

  for (let i = 0; i < frameCount; i++) {
    if (process.browser && screenWidth > 500) {
      const img = document.createElement("img");

      img.src = currentWhiteFrame(i);

      whiteImages.push(img);
    }
  }

  let num = 0;
  let loadWhite_num = 0;

  for (num = 0; num < whiteImages.length; num++) {
    whiteImages[num].onload = function () {
      if (num === whiteImages.length) {
        setLoadingWhite(true);

        loadWhite_num++;
        if (loadWhite_num == whiteImages.length) {
          setLoadingImg(true);
        }
      }
    };
  }

  // let loadBlack_num = 0;
  // for (num = 0; num < blackImages.length; num++) {
  //   blackImages[num].onload = function () {
  //     if (num === blackImages.length) {
  //       setLoadingBlack(true);
  //       loadBlack_num++;
  //       if (loadBlack_num == blackImages.length) {
  //         setLoadingImg(true);
  //       }
  //     }
  //   };
  // }

  useEffect(() => {
    const ctxFirst = currentBox && canvasFirst.current?.getContext("2d");
    const ctxSecond = canvasSecond.current?.getContext("2d");

    function RenderBlack() {
      ctxFirst?.clearRect(0, 0, 1200, 800);
      ctxFirst?.drawImage(blackImages[frameSeq.frame], 0, 0);
    }

    function RenderWhite() {
      ctxSecond?.clearRect(0, 0, 1200, 800);
      ctxSecond?.drawImage(whiteImages[frameSeq.frame], 0, 0);
    }

    if (isBreakpoint === true) {
      blackImages[0].onload = RenderBlack;
      whiteImages[0].onload = RenderWhite;
    }

    if (isBreakpoint === false) {
      gsap.to(frameSeq, {
        frame: frameCount - 1,
        snap: "frame",
        duration: 2,
        ease: "none",
        repeat: Infinity,
        onUpdate: RenderWhite,
      });
      if (currentBox) {
        gsap.to(frameSeq, {
          frame: frameCount - 1,
          snap: "frame",
          duration: 2,
          ease: "none",
          repeat: Infinity,
          onUpdate: RenderBlack,
        });
      }
    }
  }, [
    currentBox,
    canvasSecond,
    frameCount,
    frameSeq,
    blackImages,
    whiteImages,
    isBreakpoint,
  ]);

  return (
    <>
      {screenWidth > 500 ? (
        <>
          <div className={`sequence-wrap ${currentBox ? "" : "op-0"}`}>
            <canvas
              className="responsive-canvas"
              ref={canvasFirst}
              width={450}
              height={350}
            />
          </div>
          {LoadImg ? (
            <>
              <div className={`sequence-wrap ${currentBox ? "op-0" : ""}`}>
                <canvas
                  className="responsive-canvas"
                  ref={canvasSecond}
                  width={450}
                  height={350}
                />
              </div>
            </>
          ) : (
            <div className="sequence-wrap load_img">
              <img
                src="/png_sequence/light-box-animation/box_00000-min.png"
                alt=""
              />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="responsive-canvas">
            <Image
              src={currentBox ? PictureDark : PictureLight}
              layout="fill"
            />
          </div>
        </>
      )}
    </>
  );
};

export default TabletsBox;
