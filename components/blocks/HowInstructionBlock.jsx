import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import Image from "next/image";
import Button from "../../components/UI/Button";
import { images } from "../../constants/index";
import { BACKEND_ADDRESS } from "../../pages/api/config";
import BlockWrapper from "../BlockWrapper";

import how1comp from "../../assets/images/how1comp.png";
import how2comp from "../../assets/images/how2comp.png";
import how3comp from "../../assets/images/how3comp.png";
import { useRouter } from "next/router";

const HowInstructionBlock = () => {
  const saveFile = () => {
    saveAs(`${images.instruction}`, "instruction.pdf");
  };
  const router = useRouter();
  return (
    <>
      <div className="block__wrapper content-wrapper block__wrapper--how content-wrapper">
        <h2 className="how__title">
          Как принимать <b>ВЕЛСОН</b>
        </h2>
        <div className="how__wrapper">
          <motion.div
            className="how__item"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <div className="item__image-wrapper">
              <div className="how__icon">
                <Image src={how1comp} />
              </div>
            </div>
            <p className="how__text">При нарушениях сна</p>
            <p className="item__description">
              1 таблетка
              <br /> за 30–40 минут до сна
            </p>
          </motion.div>

          <motion.div
            className="how__item"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <div className="item__image-wrapper">
              <div className="how__icon">
                <Image src={how2comp} />
              </div>
            </div>
            <p className="how__text">
              При смене
              <br />
              &nbsp;часовых поясов
            </p>
            <p className="item__description">
              За 1 день до перелета
              <br />и в последующие 2–5 дней: <br /> по 1 таблетке за 30–40
              минут до сна
            </p>
          </motion.div>

          <motion.div
            className="how__item"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <div className="item__image-wrapper">
              <div className="how__icon">
                <Image src={how3comp} />
              </div>
            </div>
            <p className="how__text">Пациентам пожилого возраста</p>
            <p className="item__description">
              1 таблетка
              <br /> за 60–90 минут до сна
            </p>
          </motion.div>
        </div>

        <div className="how__footer">
          <Link href={`/buy`}>
            <Button
              text={"КУПИТЬ ВЕЛСОН"}
              onClickAction={() => {
                router.push("/kupit-velson");
              }}
              isSimple={false}
              color="blue"
            />
          </Link>
          <a href={"/instruction.pdf"} className={"default-button white no-bg"} download>
            <span className="default-button__text">СКАЧАТЬ ИНСТРУКЦИЮ</span>
          </a>
        </div>
      </div>
      <div className="block__wrapper content-wrapper block__wrapper--how content-wrapper block__wrapper--how_blockimage">
        <video className="block__wrapper--how_video" width="860" height="484" controls="controls"
               src={`${BACKEND_ADDRESS}/upload/welson_21.12_15_v1_mix.mp4`}></video>
      </div>
    </>
  );
};

export default BlockWrapper(HowInstructionBlock, "how", [
  "block__container--how",
]);
