import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "../../constants/images";

import SleepSliderIcon1 from "../../assets/images/phone.webp";
import SleepSliderIcon2 from "../../assets/images/lamp.webp";
import SleepSliderIcon3 from "../../assets/images/bath.webp";
import SleepSliderIcon4 from "../../assets/images/yoga.webp";
import ArrowPointer from "../../assets/images/ArrowPointer.svg";

import useOnScreen from "../../utils/useOnScreen";

const SliderSticky = ({ slider }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const isVisible1 = useOnScreen(ref1);
  const isVisible2 = useOnScreen(ref2);
  const isVisible3 = useOnScreen(ref3);
  const isVisible4 = useOnScreen(ref4);

  const leftWrapper = useRef(null);
  let leftWrapperTopOffset = leftWrapper?.current?.offsetTop;

  const endOfBlock = useRef(null);

  let icon1 =
    typeof window !== "undefined" && document.getElementById("benefits__icon1");
  let icon2 =
    typeof window !== "undefined" && document.getElementById("benefits__icon2");
  let icon3 =
    typeof window !== "undefined" && document.getElementById("benefits__icon3");
  let icon4 =
    typeof window !== "undefined" && document.getElementById("benefits__icon4");

  let changeCurrentActive = (action) => {
    let plus = function () {
      if (isVisible1) {
        icon2.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }

      if (isVisible2) {
        icon3.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }

      if (isVisible3) {
        icon4.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    };
    let minus = function () {
      if (isVisible4) {
        icon3.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }

      if (isVisible3) {
        icon2.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }

      if (isVisible2) {
        icon1.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    };

    if (action == "plus") {
      plus();
    }

    if (action == "minus") {
      minus();
    }
  };

  let checkCurrentActive = function () {
    if (isVisible1) {
      return 1;
    }

    if (isVisible2) {
      return 2;
    }

    if (isVisible3) {
      return 3;
    }
    return 4;
  };

  return (
    <div className="m4" id="benefits">
      <div className="m4__sticky">
        <div className="m4__sticky-wrap">
          <div className="m4__container sticky">
            <div className="m4__left-wrapper" ref={leftWrapper}>
              {/* точки позиции */}
              <div className="m4__page-dots">
                <div className="benefit-list">
                  <Image
                    src={ArrowPointer}
                    className={checkCurrentActive() === 1 ? "disabled" : ""}
                    onClick={() => changeCurrentActive("minus")}
                  />

                  <div
                    className={`benefit-list__item ${
                      isVisible1 ? "active" : ""
                    }`}
                    onClick={() =>
                      icon1.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      })
                    }
                  />
                  <div
                    className={`benefit-list__item ${
                      isVisible2 ? "active" : ""
                    }`}
                    onClick={() =>
                      icon2.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      })
                    }
                  />
                  <div
                    className={`benefit-list__item ${
                      isVisible3 ? "active" : ""
                    }`}
                    onClick={() =>
                      icon3.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      })
                    }
                  />

                  <div
                    className={`benefit-list__item ${
                      isVisible4 ? "active" : ""
                    }`}
                    onClick={() =>
                      icon4.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      })
                    }
                  />

                  <Image
                    src={ArrowPointer}
                    className={checkCurrentActive() === 4 ? "disabled" : ""}
                    onClick={() => changeCurrentActive("plus")}
                  />
                </div>
              </div>
              {/* левый контент */}
              <div className="m4__copy-wrap">
                {/* Первое преимущество */}
                {isVisible1 && (
                  <motion.div className="m4__copy m4__copy-1">
                    <p className="m4__title">Гаджеты перед сном</p>

                    <motion.div
                      className="m4__text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="list__text">
                        Не проводите вечернее время за отдыхом перед экранами
                        телевизора или смартфона: излучение экранов негативно
                        влияет на качество предстоящего сна
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* второе преимущество */}
                {isVisible2 && (
                  <motion.div className="m4__copy m4__copy-1">
                    <p className="m4__title">Подготовьте спальню</p>

                    <motion.div
                      className="m4__text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, display: "none" }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="list__text">
                        Проветривание и приятный полумрак за 1 час до сна
                        способствует выработке мелатонина
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* третье преимущество */}
                {isVisible3 && (
                  <motion.div className="m4__copy m4__copy-1">
                    <p className="m4__title">Теплая ванна с аромамаслами</p>

                    <motion.div
                      className="m4__text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, display: "none" }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="list__text">
                        Способствует физическому расслаблению, позволяет
                        успокоить нервную систему и подготовить организм ко сну
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* четвертое преимущество */}
                {isVisible4 && (
                  <motion.div className="m4__copy m4__copy-1">
                    <p className="m4__title">Медитации</p>

                    <motion.div
                      className="m4__text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, display: "none" }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="list__text">
                        Способствуют нормализации дыхания, концентрации внимания
                        на своем теле и его расслаблении.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </div>
              <motion.div
                className="m4__circle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* триггеры для анимаций, ставятся вверху слева от каждого блока*/}
          <div className="m4__triggers">
            <div className="m4__trigger m4__trigger-1" ref={ref1} />
            <div className="m4__trigger m4__trigger-2" ref={ref2} />
            <div className="m4__trigger m4__trigger-3" ref={ref3} />
            <div className="m4__trigger m4__trigger-4" ref={ref4} />
          </div>

          <div className="m4__products-wrap">
            {/* враппер всего продукта */}
            <div className="m4__product-wrapper">
              {/* картинка справа */}
              <div className="m4__product-shot">
                <Image
                  className="image__icon"
                  src={SleepSliderIcon1}
                  id="benefits__icon1"
                  alt="Преимущества"
                  initial={{ opacity: 0, display: "none" }}
                  animate={{ opacity: 1, display: "block" }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="m4__product-wrapper">
              {/* картинка справа */}
              <div className="m4__product-shot">
                <Image
                  className="image__icon"
                  src={SleepSliderIcon2}
                  alt="Преимущества"
                  id="benefits__icon2"
                  initial={{ opacity: 0, display: "none" }}
                  animate={{ opacity: 1, display: "block" }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="m4__product-wrapper">
              {/* картинка справа */}
              <div className="m4__product-shot">
                <Image
                  className="image__icon"
                  src={SleepSliderIcon3}
                  alt="Преимущества"
                  id="benefits__icon3"
                  initial={{ opacity: 0, display: "none" }}
                  animate={{ opacity: 1, display: "block" }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="m4__product-wrapper">
              {/* картинка справа */}
              <div className="m4__product-shot">
                <Image
                  className="image__icon"
                  src={SleepSliderIcon4}
                  alt="Преимущества"
                  id="benefits__icon4"
                  initial={{ opacity: 0, display: "none" }}
                  animate={{ opacity: 1, display: "block" }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSticky;
