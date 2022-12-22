import React from "react";
import { images } from "../../constants";
import Image from "next/image";
import "react-lazy-load-image-component/src/effects/blur.css";
import works1 from "../../assets/images/works1.svg";
import works2 from "../../assets/images/works2.svg";
import works3 from "../../assets/images/works3.svg";
import works4 from "../../assets/images/works4.svg";

const ActionHowWorks = () => {
  return (
    <>
      <div className="actions__title">
        <p className="title__description descr">
          Мелатонин обладает уникальным влиянием <br /> на организм человека:
        </p>
      </div>

      <div className="works__wrapper content-wrapper">
        <div className="works__item">
          <div className="item__image-wrapper">
            <Image effect="blur" src={works3} className="works__icon" />
          </div>
          <p className="works__text">Помогает бороться с бессонницей</p>
        </div>
        <div className="works__item">
          <div className="item__image-wrapper">
            <Image effect="blur" src={works2} className="works__icon" />
          </div>
          <p className="works__text">Нормализует циклы сна и бодрствования</p>
        </div>
        <div className="works__item">
          <div className="item__image-wrapper">
            <Image effect="blur" src={works1} className="works__icon" />
          </div>
          <p className="works__text">Способствует восстановлению сил</p>
        </div>
        <div className="works__item">
          <div className="item__image-wrapper">
            <Image effect="blur" src={works4} className="works__icon" />
          </div>
          <p className="works__text">
            Адаптирует организм к метеочувствительности
          </p>
        </div>
      </div>
    </>
  );
};

export default ActionHowWorks;
