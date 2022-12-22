import ReactHtmlParser from "react-html-parser";

import SliderQuality from "../SliderQuality";
import SliderSticky from "../SliderSticky";

import useMediaQuery from "../../utils/useMediaQuery";

import styles from "./index.module.css";

const QualitySleep = ({ qualitySleep }) => {
  const slider = qualitySleep.slider;
  const isBreakpoint = useMediaQuery(1024);
  return (
    <div className={styles.qualitySleep__container} id="rules">
      <h1
        className={styles.qualitySleep__title}
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
      >
        {ReactHtmlParser(qualitySleep.title)}
      </h1>
      {isBreakpoint ? (
        <SliderQuality slider={slider} />
      ) : (
        <SliderSticky slider={slider} />
      )}
    </div>
  );
};

export default QualitySleep;
