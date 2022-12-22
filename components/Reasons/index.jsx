import styles from "./index.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

const Reasons = ({ reasons }) => {
  return (
    <div className={styles.reasons__bg} id="reasons">
      <div className={styles.reasons__container}>
        <div className={styles.reasons__title}>
          {ReactHtmlParser(reasons.title)}
        </div>
        <span className={styles.reasons__subtitle}>
          {ReactHtmlParser(reasons.text)}
        </span>
        <div className={styles.reasons__body}>
          {reasons.icons.map((item) => (
            <motion.div
              key={item.id}
              className={styles.reasons__item}
              whileInView={{ opacity: [0, 1] }}
            >
              <div className={styles.item__image}>
                <span>
                  <Image
                    loading="lazy"
                    width={144}
                    height={150}
                    src={item.image.src}
                    whileInView={{ scale: [1.1, 1] }}
                  />
                </span>
              </div>
              <p className={styles.item__text}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
