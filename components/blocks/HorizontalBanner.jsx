import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import time from "../../assets/images/time.svg";
import gormon from "../../assets/images/gormon.svg";
import smiley from "../../assets/images/Smiley.svg";
import shieldCheck from "../../assets/images/ShieldCheck.svg";
import sunLight from "../../assets/images/sunLight.svg";
import menuBg from "../../assets/images/menuBg.png";
import benefitsIcon1 from "../../assets/images/benefitsIcon1.svg";
import benefitsIcon2 from "../../assets/images/benefitsIcon2.svg";
import benefitsIcon3 from "../../assets/images/benefitsIcon3.svg";
import Image from "next/image";
import ArrowPointer from "../../assets/images/ArrowPointer.svg";

const HorizontalBanner = () => {
  const [currentActive, setCurrentActive] = useState(1);

  const handlersBox = useSwipeable({
    onSwipedLeft: ({ dir, event }) => {
      event.stopPropagation();
      changeCurrentActive("plus");
    },

    onSwipedRight: ({ dir, event }) => {
      event.stopPropagation();
      changeCurrentActive("minus");
    },

    preventDefaultTouchmoveEvent: true,
  });

  let changeCurrentActive = (action) => {
    let plus = function () {
      if (currentActive === 1) {
        setCurrentActive(2);
      }

      if (currentActive === 2) {
        setCurrentActive(3);
      }
    };
    let minus = function () {
      if (currentActive === 3) {
        setCurrentActive(2);
      }

      if (currentActive === 2) {
        setCurrentActive(1);
      }
    };

    if (action == "plus") {
      plus();
    }

    if (action == "minus") {
      minus();
    }
  };

  return (
    <div className="banner mobile" id="benefits">
      <div className="banner__wrapper">
        <div className="banner__title">
          <p className="m3__title">
            Преимущества <b>ВЕЛСОН</b>
          </p>
        </div>
        <div className="banner__swiper">
          <div className="benefit-list">
            <Image
              src={ArrowPointer}
              className={currentActive === 1 ? "disabled" : ""}
              onClick={() => changeCurrentActive("minus")}
              width={32}
              height={32}
            />

            <div
              className={`benefit-list__item ${
                currentActive === 1 ? "active" : ""
              }`}
              onClick={() => setCurrentActive(1)}
            />
            <div
              className={`benefit-list__item ${
                currentActive === 2 ? "active" : ""
              }`}
              onClick={() => setCurrentActive(2)}
            />
            <div
              className={`benefit-list__item ${
                currentActive === 3 ? "active" : ""
              }`}
              onClick={() => setCurrentActive(3)}
            />
            <Image
              src={ArrowPointer}
              className={currentActive === 3 ? "disabled" : ""}
              onClick={() => changeCurrentActive("plus")}
            />
          </div>
        </div>

        <div className="banner__content" {...handlersBox}>
          <div className="content_left">
            {currentActive === 1 && (
              <motion.div className="m3__copy m3__copy-1">
                <motion.div
                  className="m3__text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="list__text">
                    <ul>
                      Помогает
                      <li>
                        засыпать уже через 2
                        <span className="inline_icon">
                          <Image src={time} alt="" />
                        </span>
                        &nbsp;минут
                      </li>
                      <li>крепко спать всю ночь</li>
                      <li>легко просыпаться утром</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {currentActive === 2 && (
              <motion.div className="m3__copy m3__copy-1">
                <motion.div
                  className="m3__text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="list__text">
                    Пол
                    <span className="inline_icon">
                      <Image src={smiley} alt="" />
                    </span>
                    жительно влияет на память, концентрацию, запоминание.
                    <br />
                    Снижает стрессовые реакции.
                  </p>
                </motion.div>
              </motion.div>
            )}

            {currentActive === 3 && (
              <motion.div className="m3__copy m3__copy-1">
                <motion.div
                  className="m3__text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="list__text">
                    Высокая степень без
                    <span className="inline_icon">
                      <Image src={shieldCheck} alt="" />
                    </span>
                    пасности: не вызывает привыкания. <br />
                    <br />
                    Прекращение курса после 6 месяцев терапии не приводило к
                    проявлениям отсроченной бессонницы и синдрома отмены.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
          <div className="content_right">
            <div
              className="content__bg"
              onClick={() => changeCurrentActive("plus")}
            >
              {currentActive === 1 && (
                <Image
                  className="image__icon"
                  src={benefitsIcon1}
                  id="benefits__icon1"
                  alt="Преимущества"
                  initial={{ opacity: 0, display: "none" }}
                  animate={{ opacity: 1, display: "block" }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                />
              )}

              {currentActive === 2 && (
                <Image
                  className="image__icon"
                  src={benefitsIcon2}
                  id="benefits__icon2"
                  alt="Преимущества"
                  initial={{ opacity: 0, display: "none" }}
                  animate={{ opacity: 1, display: "block" }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                />
              )}

              {currentActive === 3 && (
                <Image
                  className="image__icon"
                  src={benefitsIcon3}
                  id="benefits__icon3"
                  alt="Преимущества"
                  initial={{ opacity: 0, display: "none" }}
                  animate={{ opacity: 1, display: "block" }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBanner;
