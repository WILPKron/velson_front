import React from "react";
import Image from "next/image";
// import { images } from "../../constants/images";
import ActionGraph from "../elements/ActionGraph";
import ActionGraphMobile from "../elements/ActionGraphMobile";
import ActionHowWorks from "../elements/ActionHowWorks";
import { BlockWrapper } from "../wrapper";
import useMediaQuery from "../../utils/useMediaQuery";

const ActionBlock = () => {
  const isBreakpoint = useMediaQuery(1024);

  return (
    <>
      <div className="actions-section">
        <div className="block__wrapper content-wrapper">
          <div id="actions" className="actions">
            <div className="actions__title">
              <p className="title__text">
                Действие <b>мелатонина</b>
              </p>
              <p className="title__description">
                Мелатонин — горм
                <Image className="inline_icon" src={images.gormon} alt="" />н
                cна, который регулирует внутренние часы организма. Пик выработки
                приходится на ночное время в период с 2:00 до 5:00 ч.
              </p>
            </div>
          </div>
        </div>
      </div>
      {isBreakpoint ? <ActionGraphMobile /> : <ActionGraph />}
      {/* subblock */}
      <div className="block__wrapper block__wrapper--works">
        <div id="works" className="works">
          <ActionHowWorks />
        </div>
      </div>
    </>
  );
};

export default BlockWrapper(ActionBlock, "action", [
  "block__container--action",
]);
