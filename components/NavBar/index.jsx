import { React, useCallback, useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { images } from "../../constants/index";

import { Helmet } from "react-helmet";

import { motion } from "framer-motion";

import Modal from "../Modal";
import MedicalPopupSmall from "../Modal/MedicalPopupSmall";
import MedicalPopupBig from "../Modal/medicalPopupBig";

import Image from "next/image";
import Link from "next/link";
import Footer from "../blocks/Footer";

const Layout = ({ children, data }) => {
  const header = data?.header;
  const navbar = data?.navbar;

  const large = data?.popupInfo?.large
  const small = data?.popupInfo?.small
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const [y, setY] = useState(typeof window !== "undefined" && window.scrollY);
  const [isView, setIsView] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  isMenuOpen
    ? typeof document !== "undefined" &&
      document.body.style.overflowY == "hidden"
    : typeof document !== "undefined" && document.body.style.overflowY == "";

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
    if (window.pageYOffset <= 30) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const animationVariants = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: -100 },
  };

  const MenuanimationVariants = {
    show: { opacity: 1, y: 0, display: "block" },
    hide: { opacity: 0, y: "-10%", display: "none" },
  };
  const firstData = header?.slice(0, 5);
  const secondData = header?.slice(5, header.length);
  const contacts = data?.contacts;

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const ref = useDetectClickOutside({ onTriggered: handleCloseMenu });

  return (
    <>
      <motion.nav
        className={`app__navbar
	 ${isTransparent && !isMenuOpen ? "transparent" : ""}
 	${isView ? "onscroll" : ""}
	 ${isMenuOpen ? "open" : ""} `}
        variants={animationVariants}
        ref={ref}
      >

        <MedicalPopupSmall data={small}/>
        <MedicalPopupBig data={large}/>

        <Modal show={isModalOpen} close={() => setIsModalOpen(false)} />
        <div className="content-wrapper navbar__wrapper">
          <Link href="/">
            <Image
              src={images.logo}
              alt="logo"
              style={{ maxHeight: 40 }}
              width={130}
            />
          </Link>
          <ul className="app__navbar-links">
            {navbar.map((menu_item, index) => (
              <li
                className="app__flex p-text"
                key={generateKey(menu_item.name)}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  href={`${menu_item.href}`}
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <a>{menu_item.name}</a>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`header__wrapper ${isMenuOpen ? "is-active" : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className={`header__menu`}>
              <span></span>
            </div>
          </div>
        </div>
        <div className="app__navbar-line" />
        <motion.div
          className="menu__wrapper"
          animate={isMenuOpen ? "show" : "hide"}
          variants={MenuanimationVariants}
        >
          <div className="menu__content">
            <ul className="menu__col">
              {firstData?.map((i, index) => (
                <li
                  key={`${index}${i.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="menu__item"
                >
                  <Link href={`${i.href}`}>
                    <a>{i.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="menu__col">
              {secondData?.map((i, index) => (
                <li
                  key={`${index}${i.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="menu__item"
                >
                  <Link href={`${i.href}`}>
                    <a onClick={animationVariants.hide}>{i.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="menu__col">
              <li
                className="menu__item"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                Задать нам вопрос
              </li>
              <li
                className="menu__item"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <Link href="mailto:info@petrovax.ru">
                  <a>info@petrovax.ru</a>
                </Link>
              </li>
              <li className="menu__item" onClick={() => setIsMenuOpen(false)}>
                <Link href="tel:+74957307545">
                  <a>{contacts.phone}</a>
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.nav>
      {children}
      <Footer footer={data.footer} contacts={data.contacts} />
    </>
  );
};

export default Layout;
