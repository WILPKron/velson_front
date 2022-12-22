import React from "react";

import Link from "next/link";
import Image from "next/image";

import Telegram from "../../assets/images/networks/icon1.svg";
import VK from "../../assets/images/networks/icon2.svg";
import OK from "../../assets/images/networks/icon3.svg";
import Twitter from "../../assets/images/networks/icon4.svg";

const Repost = ({ route }) => {
  const URL = "https://velson24.ru";

  const repost = [
    {
      id: 1,
      name: "Вконтакте",
      img: VK,
      url: `https://vk.com/share.php?url=${URL}${route.asPath}`,
    },
    {
      id: 2,
      name: "одноклассники",
      img: OK,
      url: `https://connect.ok.ru/offer?url=${URL}${route.asPath}`,
    },
    {
      id: 3,
      name: "телеграм",
      img: Telegram,
      url: `https://t.me/share/url?url=${URL}${route.asPath}`,
    },
    {
      id: 4,
      name: "twitter",
      img: Twitter,
      url: `https://twitter.com/share?url=${URL}${route.asPath}`,
    },
  ];

  return (
    <div className="repost">
      <span className="share">Поделиться результатами теста</span>
      {repost.map((item) => (
        // <a target="_blank" href={`${item.url}`}>
        <div
          key={repost.url}
          onClick={() =>
            window.open(
              `${item.url}`,
              "_blank",
              "scrollbars=yes,menubar=no, resizable=yes,toolbar=no,location=no,status=no,width=600,height=500"
            )
          }
          className="network"
        >
          <Image src={item.img} width={20} height={20} />
          <div>{item.name}</div>
        </div>
        // </a>
      ))}
    </div>
  );
};
export default Repost;
