import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import ShoppingCart from "../../assets/images/ShoppingCart.svg";
const OrderNow = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowBottom, setWindowBottom] = useState(0);
  useEffect(() => {
    let medWarnOffsetHeight =
      document.getElementById("med-warning")?.offsetHeight;
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    const windomBottomOffset = Math.round(document.body.scrollHeight);
    setScrollPosition(position);
    setWindowBottom(windomBottomOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationVariants = {
    show: { opacity: 1, PointerEvent: "default" },
    hide: { opacity: 0, PointerEvent: "none" },
  };

  return (
    <Link
      className={`order-now__link ${
        scrollPosition >= 250 && scrollPosition <= windowBottom - 850
          ? ""
          : "disabled-link"
      }`}
      href="/kupit-velson"
    >
      <motion.div
        id="widget"
        className="order-now"
        animate={
          scrollPosition >= 250 && scrollPosition <= windowBottom - 850
            ? "show"
            : "hide"
        }
        variants={animationVariants}
        // style={{ bottom: medWarnOffsetHeight + 6 }}
      >
        <div className="order-now__left">
          {/* <Image src={ShoppingCart} alt="Купить сейчас" /> */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.532 24.4L8.54814 24.5789C8.63462 25.0544 9.04874 25.4 9.532 25.4V24.4ZM5.626 2.924L4.64142 3.09896L4.64214 3.10294L5.626 2.924ZM4.534 2L4.54358 1H4.534V2ZM2 1H1V3H2V1ZM9.532 17.8H8.532V19.8H9.532V17.8ZM26.094 18.8L26.097 17.8H26.094V18.8ZM28.292 16.966L27.3082 16.7866L27.3076 16.7899L28.292 16.966ZM30 7.6L30.9838 7.7794C31.037 7.4876 30.9579 7.18723 30.7679 6.95945C30.5779 6.73168 30.2966 6.6 30 6.6V7.6ZM7.13333 6.6H6.13333V8.6H7.13333V6.6ZM25.52 23.4H9.532V25.4H25.52V23.4ZM10.5159 24.2211L6.60986 2.74506L4.64214 3.10294L8.54814 24.5789L10.5159 24.2211ZM6.61058 2.74905C6.52407 2.26222 6.27012 1.82095 5.89267 1.50157L4.60079 3.02834C4.62215 3.04642 4.63653 3.0714 4.64142 3.09895L6.61058 2.74905ZM5.89267 1.50157C5.51522 1.18219 5.038 1.00478 4.54358 1.00005L4.52442 2.99995C4.55241 3.00022 4.57942 3.01026 4.60079 3.02834L5.89267 1.50157ZM4.534 1H2V3H4.534V1ZM12.76 27.2C12.76 28.1941 11.9541 29 10.96 29V31C13.0587 31 14.76 29.2987 14.76 27.2H12.76ZM10.96 29C9.96589 29 9.16 28.1941 9.16 27.2H7.16C7.16 29.2987 8.86132 31 10.96 31V29ZM9.16 27.2C9.16 26.2059 9.96589 25.4 10.96 25.4V23.4C8.86132 23.4 7.16 25.1013 7.16 27.2H9.16ZM10.96 25.4C11.9541 25.4 12.76 26.2059 12.76 27.2H14.76C14.76 25.1013 13.0587 23.4 10.96 23.4V25.4ZM27.32 27.2C27.32 28.1941 26.5141 29 25.52 29V31C27.6187 31 29.32 29.2987 29.32 27.2H27.32ZM25.52 29C24.5259 29 23.72 28.1941 23.72 27.2H21.72C21.72 29.2987 23.4213 31 25.52 31V29ZM23.72 27.2C23.72 26.2059 24.5259 25.4 25.52 25.4V23.4C23.4213 23.4 21.72 25.1013 21.72 27.2H23.72ZM25.52 25.4C26.5141 25.4 27.32 26.2059 27.32 27.2H29.32C29.32 25.1013 27.6187 23.4 25.52 23.4V25.4ZM9.532 19.8H26.094V17.8H9.532V19.8ZM26.091 19.8C26.8497 19.8023 27.585 19.5371 28.1676 19.051L26.8862 17.5154C26.6648 17.7001 26.3854 17.8009 26.097 17.8L26.091 19.8ZM28.1676 19.051C28.7502 18.5649 29.1428 17.889 29.2764 17.1421L27.3076 16.7899C27.2568 17.0738 27.1076 17.3306 26.8862 17.5154L28.1676 19.051ZM29.2758 17.1454L30.9838 7.7794L29.0162 7.4206L27.3082 16.7866L29.2758 17.1454ZM30 6.6H7.13333V8.6H30V6.6Z"
              fill="#0068D7"
            />
          </svg>
        </div>

        <p className="order-now__text">КУПИТЬ ВЕЛСОН</p>
      </motion.div>
    </Link>
  );
};

export default OrderNow;
