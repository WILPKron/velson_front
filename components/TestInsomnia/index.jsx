import { useState } from "react";
import { useRouter } from "next/router";
import FormData from "form-data";
import Head from "next/head";
import OrderNow2 from "../../components/UI/OrderNow2";

import { BACKEND_URL } from "../../pages/api/config";
import TestWrapper from "../TestWrapper";
import TestPage from "../TestPage";
import TestPageResult from "../TestPageResult";

const TestInsomnia = ({ data }) => {
  const route = useRouter();

  const questions = data.questions;
  const results = data.results;

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState(questions);
  const [point, setPoint] = useState(0);

  const updateAnswers = (step, indexList, value) => {
    setAnswers((current) =>
      current.map((obj) => {
        if (obj.step === step) {
          obj.answers.map((item) => (item.value = false));
          obj.answers[indexList].value = value;
        }
        return obj;
      })
    );

    let calcPoints = 0;
    answers.map((element, index) => {
      if (index < step) {
        let answer = element.answers.find((item) => item.value === true);
        if (answer) {
          calcPoints = calcPoints + Number(answer.point);
          calcPoints = calcPoints + Number(answer.point);
        }
      }
    });

    setPoint(calcPoints);
    setStep(step + 1);


    if (step === answers?.length) {
      let number = Date.now();
      route.push(`/${route.query.page}?result=${number}`, undefined, {
        shallow: true,
      });
      sendResults(number);
    }
  };

  const resultAnswer = results?.find((i) => point >= i.score);

  let sendResults = (number) => {
    const formData = new FormData();

    formData.append("result", number);
    formData.append("answers", JSON.stringify(answers));
    fetch(`${BACKEND_URL}/testresult/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setIsSent(true);
        setResult(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{data?.active?.result?.meta?.title}</title>
        <meta property="og:title" content={data?.active?.result?.meta?.title} />

        <meta
          property="og:description"
          content={data?.active?.result?.meta?.description}
        />

        <meta
          property="og:image"
          content={data?.active?.result?.meta?.image?.src}
        ></meta>

        <meta
          property="og:image:width"
          content={data?.active?.result?.meta?.image?.width}
        ></meta>
        <meta
          property="og:image:height"
          content={data?.active?.result?.meta?.image.height}
        ></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velson24.ru" />
        <meta property="og:site_name" content="Велсон" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="test-container">
        <div
          className="test-container-bg-img-1"
          style={{ background: `url(${data.test?.picture.src}` }}
        ></div>
        <OrderNow2 />

        {!data.active?.result && (
          <>
            {step === 0 && <TestWrapper setStep={setStep} />}
            {answers?.map((item) => (
              <div>
                {item.step === step && item.step <= answers.length && (
                  <TestPage
                    step={step}
                    item={item}
                    route={route}
                    answers={answers}
                    updateAnswers={updateAnswers}
                    sendResults={sendResults}
                  />
                )}
              </div>
            ))}
          </>
        )}
        {data.active?.result && (
          <TestPageResult data={data?.active.result} route={route} />
        )}
        {!data.active?.result && step > answers?.length && (
          <TestPageResult data={resultAnswer} route={route} />
        )}
      </div>
    </>
  );
};

export default TestInsomnia;
