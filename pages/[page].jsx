import axios from "axios";
import { BACKEND_URL } from "./api/config";

import Article from "../components/Article";
import TestInsomnia from "../components/TestInsomnia";
import WhyVelson from "../components/WhyVelson";

const Page = ({ data, type }) => {
  if (type === "test") {
    return <TestInsomnia data={data} />;
  } else if (type === "learn") {
    return <Article req={data} />;
  } else if (type === "whyvelson") {
    return <WhyVelson data={data} />;
  }
};

export async function getServerSideProps(context) {
  const slug = context.query.page;
  const query = context.query;
  let serverResponse = null;

  console.log("Is it a test?: ", query.result);

  if (query.result) {
    serverResponse = await axios.get(
      `${BACKEND_URL}/tests/${query.page}/${query.result}/`
    );

    return {
      props: {
        type: "test",
        data: serverResponse.data,
      },
    };
  }
  serverResponse = await axios.get(`${BACKEND_URL}/getPageContent/${slug}/`);

  console.log("Dynamic page response: ", serverResponse.data);
  return {
    props: serverResponse.data,
  };
}

export default Page;
