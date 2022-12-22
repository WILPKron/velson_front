import React, { useState } from "react";

import { motion } from "framer-motion";

import Modal from "../Modal";

import Link from "next/link";
import Image from "next/image";

import { images } from "../../constants";

const Footer = ({ footer, contacts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firstData = footer.slice(0, 5);
  const secondData = footer.slice(5, footer.length);
  const animationVariants = {
    open: {},
    closed: { display: "none" },
  };

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const [isClose, setIsClose] = useState(false);

  const handleClose = () => {
    setIsClose(true);
    document.getElementById("widget").classList.add("order-now-bottom");
    localStorage.setItem("cookie", false);
  };

  return (
    <>
      <div className="footer__wrapper">
        <Modal show={isModalOpen} close={() => setIsModalOpen(false)} />
        <div className="footer content-wrapper">
          <div className="footer__body">
            <div className="footer__col">
              <Image src={images.logo} alt="logo" />

              <div className="velson__info">
                <span>ООО «НПО Петровакс Фарм» © 2022</span>
              </div>

              <Image
                height={70}
                width={160}
                src={images.petrovaxLogo}
                alt="logo"
              />

              <div className="petrovax__info">
                <span>{contacts.address}</span>
              </div>
            </div>

            <div className="footer__menu">
              <ul className="menu">
                {firstData.map((i) => (
                  <li className="menu__item" key={generateKey(i.name)}>
                    <Link href={`${i.href}`}>
                      <a>{i.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="menu">
                {secondData.map((i) => (
                  <li className="menu__item" key={generateKey(i.name)}>
                    <Link href={`${i.href}`}>
                      <a>{i.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="footer__menu__question">
                <li
                  className="menu__subtitle__footer ask_question"
                  onClick={() => setIsModalOpen(true)}
                >
                  Задать нам вопрос
                </li>
                <li className="menu__item">
                  <Link href="mailto:info@petrovax.ru">
                    <a>info@petrovax.ru</a>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="tel:+74957307545">
                    <a>{contacts.phone}</a>
                  </Link>
                </li>
                <li className="menu__item map-label-footer">
                  <Link href="/sitemap">
                    <a>Карта сайта</a>
                  </Link>
                </li>
                <li className="menu__item">
                  <div className="footer__menu__social">
                    <Link href={contacts.youtube}>
                      <a target={"_blank"}>
                        <Image
                          style={{ cursor: "pointer" }}
                          src={images.youtube}
                          alt="YouTube"
                        />
                      </a>
                    </Link>
                    {/* <Link href={contacts.vk}>
                      <a>
                        <Image
                          src={images.vk}
                          alt="vk.com"
                          style={{ display: "none" }}
                        />
                      </a>
                    </Link> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div
          className="med-warning"
          style={{ position: "fixed" }}
          animate={isClose ? "closed" : "open"}
          variants={animationVariants}
          id="med-warning"
        >
          <p className="med-warning__text">
            имеются противопоказания. необходимо ознакомиться с инструкцией
          </p>
          <div className="med-warning__close" onClick={handleClose}>
            <Image src={images.close} alt="close" />
          </div>
        </motion.div>
        <div itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="ООО «НПО Петровакс Фарм»" />
          <link itemProp="url" href="https://velson24.ru" />
          <meta itemProp="telephone" content="+74957307545" />
          <meta itemProp="email" content="info@petrovax.ru" />
          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <meta itemProp="postalCode" content="142143" />
            <meta itemProp="addressCountry" content="Россия" />
            <meta
              itemProp="addressLocality"
              content="Московская область, Подольск"
            />
            <meta
              itemProp="streetAddress"
              content="село Покров, ул. Сосновая, д. 1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
