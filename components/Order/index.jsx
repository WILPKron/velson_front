import { Helmet } from "react-helmet";
import useMediaQuery from "../../utils/useMediaQuery";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

const Order = ({ products }) => {
  const isBreakpoint = useMediaQuery(768);

  return (
    <div class="order__container">
      <Helmet>
        <meta charSet="utf-8" />

        <meta property="og:url" content="https://velson24.ru/buy" />
      </Helmet>
      <motion.h1
        itemProp="name"
        class="order__title"
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
      >
        Заказать ВЕЛСОН {isBreakpoint ? <br /> : ""}{" "}
        <span>с доставкой на дом или в пункт выдачи</span>
      </motion.h1>
      <div className="order__body">
        {products?.map((item) => (
          <motion.div
            key={item.id}
            className="order__item"
            whileInView={{ opacity: [0, 1] }}
          >
            <Link href={item.url}>
              <a rel="nofollow noopener" target="_blank">
                <Image
                  src={item.previewPicture.src}
                  alt={item.name}
                  width={item.previewPicture.width}
                  height={item.previewPicture.height}
                />
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Order;
