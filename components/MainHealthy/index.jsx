import Image from "next/image";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ReactHtmlParser from "react-html-parser";

import styles from "./index.module.css";

import ArrowPointer from "../../assets/images/healthy/white-arrow.svg";

const MainHealthy = ({ data }) => {
  return (
    <div className={styles.mainhealthy__body}>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <motion.div
        className={styles.mainhealthy__title__container}
        whileInView={{ opacity: [0, 1] }}
      >
        <h1 className={styles.mainhealthy__title}>
          {ReactHtmlParser(data.name)}
        </h1>
        <h2 className={styles.mainhealthy__subtitle}>
          {ReactHtmlParser(data.previewText)}
        </h2>
        <div className={styles.mainhealthy__footer}>
          <Image priority src={ArrowPointer} />
        </div>
      </motion.div>
    </div>
  );
};

export default MainHealthy;
