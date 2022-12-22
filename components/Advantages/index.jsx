import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./index.module.css";

const Advantages = ({ advantages }) => {
  return (
    <div className={styles.advantages__bg}>
      <div className={styles.advantages__container}>
        <div className={styles.advantages__body}>
          {advantages.map((item) => (
            <motion.div key={item.id} className={styles.advantages__item}>
              <div className={styles.item__image}>
                <span>
                  <Image
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.alt}
                    whileInView={{ scale: [1.1, 1], opacity: [0, 1] }}
                  />
                </span>
              </div>
              <motion.p
                className={styles.item__text}
                whileInView={{ opacity: [0, 1], y: [40, 0] }}
                transition={{ ease: "easeInOut", delay: 0.5 }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
