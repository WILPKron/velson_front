import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import Image from "next/image";
import Link from "next/link";

import OrderNow2 from "../components/UI/OrderNow2";

import { BACKEND_URL } from "./api/config";

const TestOverview = (data) => {
  const tests = data.data;
  return (
    <div>
      <OrderNow2 />
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <div class="header_background"></div>
      <div class="learn-more-container">
        <div class="learn-more-wrapper test-overview">
          {tests.map((i) => (
            <div key={i.id} class="learn-more-block-fullwidth">
              <Link href={i.code}>
                <a></a>
              </Link>

              <div class="learn-more-block-fullwidth-half-1">
                <div class="learn-more-block-fullwidth-half-img">
                  <span>
                    <Image
                      priority
                      src={i.picture.src}
                      width="850"
                      height="450"
                    />
                  </span>
                  <div class="learn-more-block-fullwidth-description-mob">
                    <div class="learn-more-description">
                      Тест: <b>{i.name}</b>
                    </div>
                    <div class="learn-more-further">Пройти тест</div>
                  </div>
                </div>
              </div>
              <div class="learn-more-block-fullwidth-half-2 mob-none">
                <div class="learn-more-description">
                  Тест: <b>{i.name}</b>
                </div>
                <div class="learn-more-further">Пройти тест</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/tests/`);
  const data = res.data;

  return {
    props: { data: data },
  };
}

export default TestOverview;
