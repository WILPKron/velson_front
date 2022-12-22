import React from "react";
import axios from "axios";
import NoSSR from "react-no-ssr";

import MainHealthy from "../components/MainHealthy";
import Reasons from "../components/Reasons";
import OrderNow2 from "../components/UI/OrderNow2";
import FallSleep from "../components/FallSleep";
import Advantages from "../components/Advantages";
import QualitySleep from "../components/QualitySleep";

import {BACKEND_URL} from './api/config';

const HealthySleep = (data) => {
  const reasons = data?.reasons;
  const fallsleep = data?.fallsleep;
  const advantages = data?.advantages;
  const qualitySleep = data?.qualitySleep;
  return (
    <>
      <NoSSR>
        <div className="healthySleep__blue_block">
          <MainHealthy data={data} />
          <Reasons reasons={reasons} />
        </div>
        <OrderNow2 />
        <FallSleep fallsleep={fallsleep} />
        <Advantages advantages={advantages} />
        <QualitySleep qualitySleep={qualitySleep} />
      </NoSSR>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/healthysleep/`);
  const data = res.data;

  return {
    props: data,
  };
}

export default HealthySleep;
