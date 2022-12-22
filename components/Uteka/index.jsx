import styles from "./index.module.css";

import UtekaLogo from "../../assets/images/order/uteka.svg";
import Link from "next/link";
import useMediaQuery from "../../utils/useMediaQuery";
import Image from "next/image";

const Uteka = () => {
  const isBreakpoint = useMediaQuery(768);

  return (
    <div className={styles.uteka__container}>
      <div className={styles.uteka__title_body}>
        <h2 className={styles.uteka__title}>
          Заказать ВЕЛСОН {isBreakpoint ? <br /> : ""}{" "}
          <span>онлайн или в аптеку</span>
        </h2>
        <Link href="https://uteka.ru/product/velson-361870/?utm_source=petrovax&utm_campaign=velson24.ru&utm_medium=referral&utm_term=gde-kupit&utm_content=other">
          <a target="_blank">
            <Image className={styles.uteka__logo} src={UtekaLogo} alt="uteka" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Uteka;
