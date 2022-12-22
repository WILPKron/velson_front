import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

import Switch from "./switch";

import styles from "./index.module.css";

const SliderQuality = ({ slider }) => {
  const [active, setActive] = useState(1);
  const [size, setSize] = useState(1980);

  const handlersBox = useSwipeable({
    onSwipedLeft: ({ dir, event }) => {
      event.stopPropagation();
      if (active < 4) setActive((prevState) => prevState + 1);
    },

    onSwipedRight: ({ dir, event }) => {
      event.stopPropagation();
      if (active > 1) setActive((prevState) => prevState - 1);
    },

    preventDefaultTouchmoveEvent: true,
  });

  const handleResize = () => {
    setSize(window.screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    handleResize();
  }, []);
  return (
    <div className={styles.slider__body} {...handlersBox}>
      {size < 1024 &&
        slider.map((item) => (
          <p
            key={item.id}
            className={styles.item__title_mobile}
            style={{
              display: active === item.id ? "block" : "none",
            }}
          >
            {item.name}
          </p>
        ))}
      <Switch active={active} setActive={setActive} />
      {slider.map((item, index) => (
        <div
          key={item.id}
          className={styles.slider__item}
          style={{ display: active === index + 1 ? "flex" : "none" }}
        >
          <div className={styles.item__text}>
            <p className={styles.item__title}>{item.title}</p>
            <p className={styles.item__subtitle}>{item.text}</p>
          </div>
          <div className={styles.item__image}>
            <Image src={item.image.src} width={400} height={400} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderQuality;
