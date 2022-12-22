import { Helmet } from "react-helmet";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import Image from "next/image";

import OrderNow2 from "../components/UI/OrderNow2";

import { BACKEND_URL } from "./api/config";

const WhyVelson = (data) => {
  const quality = data.quality;
  const safety = data.safety;
  return (
    <div>
      <OrderNow2 />
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <div class="whyvelson-bg-container">
        <div class="whyvelson-bg-wrapper">
          <div class="whyvelson-bg-heading">
            <h1 itemProp="name">{ReactHtmlParser(data.name)}</h1>
          </div>
        </div>
        <div class="down-arrow-circle-blue"></div>
      </div>
      <section>
        <div class="whyvelson-sleep-normalization-container">
          <div class="whyvelson-sleep-normalization-wrapper">
            <div class="whyvelson-sleep-normalization-heading">
              <h2>{ReactHtmlParser(data.previewText)}</h2>
            </div>
            <div class="whyvelson-sleep-normalization-benefits-wrapper">
              {data.benefits.map((i) => (
                <div class="whyvelson-sleep-normalization-benefits-item">
                  <div class="whyvelson-sleep-normalization-benefits-pic ">
                    <Image
                      priority
                      src={i.image.src}
                      width={192}
                      height={192}
                    />
                  </div>
                  <div class="why-velson-divider"></div>
                  <div class="whyvelson-sleep-normalization-text-1">
                    {i.title}
                  </div>
                  <div class="whyvelson-sleep-normalization-text-2">
                    {i.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="why-velson-quality-container">
          <div class="why-velson-quality-wrapper">
            <div class="why-velson-quality-heading">
              <h2>{ReactHtmlParser(quality.title)}</h2>
            </div>
            <div class="why-velson-quality-heading-description">
              <h3>{quality.text}</h3>
            </div>
            <div class="why-velson-quality-content-wrapper">
              <div class="why-velson-quality-content">
                <div class="why-velson-quality-content-text">
                  {quality.description}
                </div>
                <div class="why-velson-quality-buttons-wrapper">
                  <div class="why-velson-button fill">
                    <a href="/kupit-velson">Купить ВЕЛСОН</a>
                  </div>
                  <div class="why-velson-button underline">
                    <a href="/#how">Как принимать ВЕЛСОН</a>
                  </div>
                </div>
              </div>
              <div class="why-velson-quality-content">
                <div class="why-velson-quality-content-pic"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="why-velson-safety-profile-container">
          <div class="why-velson-safety-profile-wrapper">
            <div class="why-velson-safety-profile-heading">
              <h2>{ReactHtmlParser(safety.title)}</h2>
            </div>
            <div class="why-velson-safety-profile-content-wrapper">
              <div class="why-velson-safety-profile-content-item-wrapper">
                <span class="why-velson-safety-profile-content-pic-velson">
                  <Image src={safety.image.src} width={586} height={450} />
                </span>
              </div>
              {safety.images.map((i) => (
                <div class="why-velson-safety-profile-content-item-wrapper">
                  <div class="why-velson-safety-profile-content-pic safety-profile-pic-2">
                    <Image src={i.image.src} width={200} height={200} />
                  </div>
                  <div class="why-velson-divider"></div>
                  <div class="why-velson-safety-profile-text white">
                    {i.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="why-velson-divider-full-width"></div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/whyvelson/`);
  const data = res.data;

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
        notFound: true,
      },
    };
  }
  return {
    props: data,
  };
}

export default WhyVelson;
