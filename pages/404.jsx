import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../components/UI/Button";

import robot404 from "../assets/images/404/Robot.svg";

const Page404 = () => {
  const route = useRouter();
  return (
    <div className="not__found__container">
      <div className="not__found__img">
        <Image src={robot404} alt="" />
      </div>
      <div className="not__found__title">
        Ошибка <span>404</span>
      </div>
      <div className="not__found__subtitle">
        Кажется, что-то пошло не так. Страница, которую вы запрашиваете, не
        существует, была удалена или устарела
      </div>
      <div className="not__found__buttons__block">
        <Link href={`/`} style={{ zIndex: "10" }}>
          <Button
            text={"Перейти на главную"}
            onClickAction={() => {}}
            color="white"
          />
        </Link>
        <Link
          href="/kupit-velson"
          style={{ zIndex: "10" }}
          className="not__found__button__main"
        >
          <Button
            text={"Купить ВЕЛСОН"}
            onClickAction={() => route.push("/kupit-velson")}
            isSimple={false}
            color="white"
          />
        </Link>
      </div>
    </div>
  );
};

export default Page404;
