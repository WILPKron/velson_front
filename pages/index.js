import React, { useState, useContext, useEffect } from "react";
import ActionBlock from "../components/ActionBlock";
import HorizontalBanner from "../components/blocks/HorizontalBanner";
import HowInstructionBlock from "../components/blocks/HowInstructionBlock";
import MainBlock from "../components/blocks/MainBlock";
import VerticalBanner from "../components/blocks/VerticalBanner";
import Instruction from "../components/Instruction";

import OrderNow from "../components/UI/OrderNow";
import useMediaQuery from "../utils/useMediaQuery";
import axios from "axios";
import { BACKEND_URL } from "./api/config";

const MainPage = () => {
  const isBreakpoint = useMediaQuery(1024);
  useEffect(() => {
    if (
      typeof document.getElementById("widget") != "undefined" &&
      document.getElementById("widget") != null
    ) {
      if (localStorage.getItem("cookie") === "false") {
        document.getElementById("widget").classList.add("order-now-bottom");
      } else {
        document.getElementById("widget").classList.remove("order-now-bottom");
      }
    }
  }, []);
  return (
    <>
      <MainBlock />

      <OrderNow />
      {isBreakpoint ? <HorizontalBanner /> : <VerticalBanner />}

      <ActionBlock />
      <HowInstructionBlock />
      <Instruction />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/layout/`);

  const data = res.data;
    console.log(data, 'data')
  return {
    props: { api: data },
  };
}

export default MainPage;
