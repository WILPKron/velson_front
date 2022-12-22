import axios from "axios";
import Order from "../components/Order";
import Uteka from "../components/Uteka";
import Map from "../components/Map";

import styles from "./styles/buyVelsonPage.module.css";

import {BACKEND_URL} from './api/config';
import { Helmet } from "react-helmet";

const BuyVelsonPage = (data) => {
  const products = data?.items;

  return (
    <>
      <div className={styles.header_background} />
      <div className={styles.container}>
        <Order products={products} />
        <Uteka />
      </div>
      <Map />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/pharmacies/`);
  const data = res.data;

  return {
    props: data,
  };
}

export default BuyVelsonPage;
