import { Helmet } from "react-helmet";
import Link from "next/link";
import axios from "axios";

import OrderNow2 from "../components/UI/OrderNow2";

import { BACKEND_URL } from "./api/config";

const Sitemap = ({ data }) => {
  return (
    <div>
      <OrderNow2 />
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <div className="header_background" />
      <div className="sitemap-container">
        <div className="sitemap-wrapper">
          <div class="page-heading">
            <h1 itemProp="name">
              Карта <b>сайта</b>
            </h1>
          </div>
          <div className="sitemap-wrapper-columns">
            {data.map((column) => (
              <div className="sitemap-column">
                {column.map((item) =>
                  !item.length ? (
                    <div>
                      <Link href={item.link}>
                        <a>{item.name}</a>
                      </Link>
                    </div>
                  ) : (
                    <ul>
                      {item.map((i) => (
                        <li>
                          <Link href={`${i.link}`}>{i.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/sitemap/`);
  const data = res.data;
  return {
    props: { data: data },
  };
}
export default Sitemap;
