import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import ToggleThemeButton from "../../components/UI/ToggleThemeButton";
import Button from "../../components/UI/Button";
import TabletsBox from "../UI/TabletsBox";
import BlockWrapper from "../BlockWrapper";

import ArrowPointer from "../../assets/images/ArrowPointer.svg";

import { LinkScrollConsumer } from "../../utils/linkScrollConsumer";
import useMediaQuery from "../../utils/useMediaQuery";

import lineLeft from "../../assets/images/lineLeft.svg";
import lineBottom from "../../assets/images/lineBottom.svg";
import lineRight from "../../assets/images/lineRight.svg";
import lineLeftSUN from "../../assets/images/lineLeftSUN.svg";
import lineBottomSUN from "../../assets/images/lineBottomSUN.svg";
import lineRightSUN from "../../assets/images/lineRightSUN.svg";
import sunLight from "../../assets/images/sunLight.svg";
import time from "../../assets/images/time.svg";

const MainBlock = () => {
  const isBreakpoint = useMediaQuery(1024);
  const isBreakpoint560 = useMediaQuery(560);
  const router = useRouter();

  const [size, setSize] = useState(
    typeof window !== "undefined" && window.screen.width
  );

  const [isWhite, setIsWhite] = useState(false);

  const toggleTheme = () => {
    setIsWhite((prev) => !prev);
  };

  const endOfBlock = useRef(null);
  let benefitsOffsetTop = null;

  //box color choosen by moscow time
  useEffect(() => {
    let currentMoscowDate = new Date();

    const toggleHoursState = () => {
      let currentHour = currentMoscowDate
        .getHours()
        .toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

      if (currentHour >= 8 && currentHour <= 21) {
        setIsWhite(false);
      } else {
        setIsWhite(true);
      }
    };

    toggleHoursState();
  }, []);

  let scrollTo = function (id) {
    benefitsOffsetTop = document.getElementById("benefits").offsetTop;
    disableScroll();

    setTimeout(() => {
      window.scrollTo({
        top: benefitsOffsetTop,
        behavior: "smooth",
      });
    }, 1);

    setTimeout(() => {
      enableScroll();
    }, 1000);
  };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  var wheelOpt = supportsPassive ? { passive: false } : false;

  var wheelEvent =
    typeof document !== "undefined" &&
    "onwheel" in document?.createElement("div")
      ? "wheel"
      : "mousewheel";

  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  const [heightWrapper, setHeightWrapper] = useState(0);
  const mainBlockRef = useRef(null);

  const toggleMainblockHeight = () => {
    setHeightWrapper(mainBlockRef.current.clientHeight);
  };
  const handleResize = () => {
    setSize(window.screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    toggleMainblockHeight();
  }, [size]);
  const [loadingWhite, setLoadingWhite] = useState(false);

  const [loadingBlack, setLoadingBlack] = useState(false);
  return (
    <>
      {isBreakpoint ? (
        <>
          <div className={`bg__image__dark ${isWhite ? "" : "op-0"}`}></div>
          <div className={`bg__image__light ${isWhite ? "op-0" : ""}`}></div>
        </>
      ) : (
        <motion.div>
          <video
            className={`bg-video ${isWhite ? "" : "op-0"}`}
            autoPlay
            loop
            muted
          >
            <source
              src={require("../../assets/videos/dark.mp4")}
              type="video/mp4"
            />
          </video>
          <video
            className={`bg-video ${isWhite ? "op-0" : ""}`}
            autoPlay
            loop
            muted
            require="true"
          >
            <source
              src={require("../../assets/videos/light.mp4")}
              type="video/mp4"
            />
          </video>
        </motion.div>
      )}
      <motion.div ref={mainBlockRef} className="main__section">
        <div className="block__wrapper content-wrapper block__wrapper--main">
          <div id="home" className={`mainblock`}>
            {isWhite ? (
              <motion.div
                style={{ zIndex: 0 }}
                initial={{ opacity: 1 }}
                animate={{ opacity: [0, 1], transition: 2 }}
              >
                <div className="after__before__dark"></div>
                <div className="staticBgBottom"></div>
              </motion.div>
            ) : (
              <motion.div
                style={{ zIndex: 0 }}
                initial={{ opacity: 1 }}
                animate={{ opacity: [0, 2], transition: 2 }}
              >
                <div className="after__before__light"></div>
                <div className="staticBgBottomSun"></div>
              </motion.div>
            )}
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              className="app__header-info"
            >
              <motion.div className="mainblock__banner">
                <>
                  {!isBreakpoint && isWhite ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1] }}
                      transition={{ duration: 2 }}
                    >
                      <div className="lineLeft">
                        <div className="left-x-axis">
                          <div className="left-y-axis">
                            <Image src={lineLeft} alt="" />
                          </div>
                        </div>
                      </div>
                      <span className="lineBottom">
                        <Image src={lineBottom} alt="" />
                      </span>
                      <div className="lineRight">
                        <div className="right-x-axis">
                          <div className="right-y-axis">
                            <Image src={lineRight} alt="" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 2] }}
                      transition={{ duration: 4 }}
                    >
                      <div className="lineLeft Sun__left">
                        <div className="left-x-axis">
                          <div className="left-y-axis">
                            <Image src={lineLeftSUN} alt="" />
                          </div>
                        </div>
                      </div>
                      <span className="lineBottom Sun__bottom">
                        <Image src={lineBottomSUN} alt="" />
                      </span>
                      <div className="lineRight Sun__right">
                        <div className="right-x-axis">
                          <div className="right-y-axis">
                            <Image src={lineRightSUN} alt="" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>

                <div className="banner__text banner__text--wrapper">
                  {isWhite ? (
                    <>
                      {" "}
                      <motion.p
                        className="banner__text banner__text--small mb-16"
                        initial={{
                          display: "none",
                        }}
                        animate={{
                          opacity: [0, 1],
                          display: "block",
                          transition: { duration: 2 },
                        }}
                      >
                        Помогает засыпать уже через
                        {isBreakpoint560 && <br />} 2
                        <span className="inline_icon">
                          <Image src={time} alt="" />
                        </span>
                        &nbsp;минут
                      </motion.p>
                      <motion.p
                        className="banner__text banner__text--big banner__text--first"
                        initial={{
                          display: "none",
                        }}
                        animate={{
                          opacity: [0, 1],
                          display: "block",
                          transition: { duration: 2 },
                        }}
                      >
                        {isBreakpoint560 ? (
                          <>
                            <b>Вселенная</b> <br />
                            здорового <br />
                            <b>сна</b>
                          </>
                        ) : (
                          <>
                            <b>Вселенная</b> <br />
                            здорового <b>сна</b>
                          </>
                        )}
                      </motion.p>
                    </>
                  ) : (
                    <>
                      {" "}
                      <motion.p
                        className="banner__text banner__text--small
													banner__text--small--second 
												mb-16"
                        initial={{
                          display: "none",
                        }}
                        animate={{
                          opacity: [0, 2],
                          display: "block",
                          transition: { duration: 3 },
                        }}
                      >
                        Улучшает самочувствие после утреннего
                        {isBreakpoint560 ? <br /> : ""}
                        <span
                          style={{
                            whiteSpace: "nowrap",
                          }}
                        >
                          {" "}
                          &nbsp;пр
                          <Image
                            className="inline_icon"
                            src={sunLight}
                            alt=""
                          />
                          буждения,
                        </span>
                        &nbsp;
                        {isBreakpoint560 ? "" : <br />}
                        не вызывает ощущения вялости*
                      </motion.p>
                      <motion.p
                        className="banner__text banner__text--big banner__text--second"
                        initial={{
                          display: "none",
                        }}
                        animate={{
                          opacity: [0, 2],
                          display: "block",
                          transition: { duration: 3 },
                        }}
                      >
                        {isBreakpoint560 ? (
                          <>
                            <b>
                              Здоровый
                              <br /> сон —
                            </b>
                            &nbsp;бодрое <br /> <b>утро</b>
                          </>
                        ) : (
                          <>
                            <b>
                              Здоровый сон —<br />
                            </b>
                            бодрое <b>утро</b>
                          </>
                        )}
                      </motion.p>
                    </>
                  )}

                  <div
                    className="banner__image"
                    style={{
                      width:
                        loadingWhite && loadingBlack ? "80%" : "fit-content",
                    }}
                  >
                    <TabletsBox
                      currentBox={isWhite}
                      setLoadingWhite={setLoadingWhite}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="banner__footer">
            <div className="footer__col footer__col--toggle">
              <ToggleThemeButton toggleAction={toggleTheme} isWhite={isWhite} />
            </div>

            <Link href={`/buy`} as={`/buy`} className="footer__col">
              <Button
                text={"Купить ВЕЛСОН"}
                onClickAction={() => {
                  router.push("/kupit-velson");
                }}
                isSimple={false}
                color="white"
              />
            </Link>

            <Link href={`/#how`} className="footer__col">
              <Button
                text={"как принимать велсон"}
                onClickAction={() => {
                  router.push("/#how");
                }}
                isSimple={true}
                color="blue"
              />
            </Link>
          </div>
          <div
            className="footer__next"
            onClick={() => scrollTo(benefitsOffsetTop)}
          >
            <div style={{ position: "absolute", left: "40%" }}>
              <Image fill src={ArrowPointer} width={28} height={28} />
            </div>
          </div>
          <LinkScrollConsumer>
            {(context) => (
              <div
                className="main-trigger--1"
                id="main-trigger--1"
                ref={endOfBlock}
                style={{
                  display: `${context?.linkScroll ? "none" : "block"}`,
                }}
              />
            )}
          </LinkScrollConsumer>
        </div>
      </motion.div>
    </>
  );
};

export default BlockWrapper(MainBlock, "top", [
  "block__container--main height__mainblock",
]);
