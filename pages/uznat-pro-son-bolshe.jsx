import axios from "axios";
import { Helmet } from "react-helmet";

import OrderNow2 from "../components/UI/OrderNow2";
import { FullWidth } from "../components/FullWidth";
import { Grid } from "../components/Grid";
import { Grid2 } from "../components/Grid2";

import {BACKEND_URL} from './api/config';

const LearnMore = (articles) => {
  const articlesContent = articles.items;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>
          Процесс сна, нарушение сна, бессонница и много другое о сне | Велсон
        </title> */}
        {/* <meta
          name="description"
          content="Все о здоровом полноценном сне без лекарственных препаратов, рекомендации и полезные советы."
        /> */}
        {/* <meta
          property="og:title"
          content="Процесс сна, нарушение сна, бессонница и много другое о сне | Велсон"
        />
        <meta
          property="og:description"
          content="Все о здоровом полноценном сне без лекарственных препаратов, рекомендации и полезные советы."
        /> */}
        {/* <meta property="og:url" content="https://velson24.ru/learnmore" /> */}
      </Helmet>
      <OrderNow2 />
      <div class="header_background"></div>
      <div class="learn-more-container">
        <div class="learn-more-wrapper">
          {articles.pageType == "fullwidth" && (
            <FullWidth articlesContent={articlesContent} />
          )}

          {articles.pageType == "grid" && (
            <Grid articlesContent={articlesContent} />
          )}

          {articles.pageType === "grid-2" && (
            <Grid2 articlesContent={articlesContent} />
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/knowledgebase/`);
  const data = res.data;

  return {
    props: data,
  };
}

export default LearnMore;
