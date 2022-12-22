import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";

import Button from "../UI/Button";

import styles from "./index.module.css";

const FallSleep = ({ fallsleep }) => {
  const router = useRouter();

  return (
    <div className={styles.fallSleep__container} id="help">
      <motion.h3
        className={styles.fallSleep__title}
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
      >
        {ReactHtmlParser(fallsleep.title)}
      </motion.h3>
      <motion.div className={styles.fallSleep__body}>
        <div className={styles.fallSleep__description}>
          <motion.p
            whileInView={{ opacity: [0, 1], x: [-40, 0] }}
            transition={{ ease: "easeOut", delay: 0.5 }}
          >
            {ReactHtmlParser(fallsleep.text)}
          </motion.p>
          <div className={styles.fallSleep__buttons}>
            <Button
              text={"КУПИТЬ ВЕЛСОН"}
              onClickAction={() => router.push("/kupit-velson")}
              isSimple={false}
              color="blue"
            />
            <Button
              text={"КАК ПРИНИМАТЬ ВЕЛСОН"}
              onClickAction={() => router.push("/#how")}
              isSimple={true}
              color="white"
            />
          </div>
        </div>
        <motion.div
          className={styles.fallSleep__image}
          whileInView={{ opacity: [0, 1], x: [40, 0] }}
          transition={{ ease: "easeOut", delay: 0.5 }}
        >
          <Image
            loading="lazy"
            src={fallsleep.image.src}
            alt="velson"
            width={fallsleep.image.width}
            height={fallsleep.image.height}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FallSleep;
