import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import Image from "next/image";
import FormData from "form-data";

import OrderNow2 from "../components/UI/OrderNow2";
import Button from "../components/UI/Button";

import { images } from "../constants";

import { BACKEND_URL } from "./api/config";

import { REACT_APP_SITE_KEY } from "../utils/siteKey";

const VoprosyOtvety = (data) => {
  const [active, setActive] = useState(-1);
  const [activeGroup, setActiveGroup] = useState(0);

  const [subject, setsubject] = useState("");
  const [from, setfrom] = useState("");
  const [body, setbody] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isReCAPTCHA, setIsReCAPTCHA] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const ref = useRef();

  const formData = new FormData();

  const textarea =
    typeof document !== "undefined" &&
    document.querySelector("#feedback-modal .g-recaptcha-response");

  const value = typeof document !== "undefined" && textarea?.value;

  formData.append("name", subject);
  formData.append("recaptcha", value);
  formData.append("text", body);
  formData.append("email", from);

  let sendMail = () => {
    setLoading(true);
    fetch(`${BACKEND_URL}/feedback/`, {
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
    if (!isSent) {
      ref?.current?.reset();
    }
  };

  const sections = data?.sections;
  const items = data?.items;

  useEffect(() => {
    let reOpenModalForm = () => {
      setIsReCAPTCHA(false);
    };

    reOpenModalForm();
  }, [isSent]);

  const types = result?.errors?.map((i) => i.type);
  return (
    <div>
      <OrderNow2 />
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <div className="header_background"></div>
      <div className="faq-container">
        <div className="faq-wrapper">
          <div className="faq-page-heading">
            <h1 itemProp="name">
              Частые <b>вопросы</b>
            </h1>
          </div>
          <div className="faq-tabs-wrapper-mob">
            <div className="faq-tabs-wrapper">
              {sections.map((itemGroup, index) => (
                <div
                  key={index}
                  className={`faq-tab-button ${
                    itemGroup.id === activeGroup && "faq-tab-button-active"
                  }`}
                  onClick={() => setActiveGroup(itemGroup.id)}
                >
                  {itemGroup.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="faq-divider"></div>
            {sections
              .filter(
                (filtredItem) =>
                  filtredItem.id !== 0 &&
                  (filtredItem.id === activeGroup || activeGroup === 0)
              )
              .map((itemGroup, itemGroupIndex) => (
                <div key={itemGroup.id}>
                  <div className="faq-page-heading">
                    <h2>{itemGroup.name}</h2>
                  </div>
                  <div className="faq-items-wrapper">
                    {items
                      .filter(
                        (filteredItemByGroup) =>
                          filteredItemByGroup.section == itemGroup.id
                      )
                      .map((item) => (
                        <div
                          key={item.id}
                          className={`faq-item ${
                            item.id === active ? "is-active" : ""
                          }`}
                        >
                          <div
                            className="faq-item-text-question-wrapper"
                            onClick={() =>
                              setActive(item.id === active ? -1 : item.id)
                            }
                          >
                            <div className="faq-item-text">{item.name}</div>
                            <div className="faq-item-arrow"></div>
                          </div>
                          <div className="faq-item-text-answer">
                            <span>{ReactHtmlParser(item.previewText)}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <section>
        <div id="feedback-modal" className="faq-callback-form-container">
          {!result?.success ? (
            <div className="faq-callback-form-wrapper">
              <div className="faq-callback-page-heading">
                Задать свой <b>вопрос</b>
              </div>
              <div className="faq-callback-form-description">
                Если у вас возник вопрос, пожалуйста, свяжитесь с нами.
                Внимание! Обращение на сайт не является заменой консультации у
                врача
              </div>
              <form>
                <div className="form-callback-inputs-wrapper">
                  <input
                    type="text"
                    placeholder="ИМЯ"
                    onChange={(e) => setsubject(e.currentTarget.value)}
                    style={{
                      border: types?.includes("name") > 0 && "2px solid red",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="E-MAIL"
                    onChange={(e) => setfrom(e.currentTarget.value)}
                    style={{
                      border: types?.includes("email") > 0 && "2px solid red",
                    }}
                  />
                  <textarea
                    wrap="hard"
                    name="name"
                    rows="4"
                    placeholder="Ваш вопрос"
                    onChange={(e) => setbody(e.currentTarget.value)}
                    style={{
                      border: types?.includes("text") > 0 && "2px solid red",
                    }}
                  />
                </div>
                <div
                  className="ReCaptcha__wrapper"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ReCAPTCHA
                    sitekey={REACT_APP_SITE_KEY}
                    onChange={() => {
                      !null ? setIsReCAPTCHA(true) : setIsReCAPTCHA(false);
                    }}
                    ref={ref}
                  />
                  <>
                    {result?.errors?.map((i) => (
                      <div className="modal__error">{i.message}</div>
                    ))}
                  </>
                  <div class="callback-confidentiality">
                    Нажимая кнопку «Отправить», я даю свое согласие на обработку
                    моих персональных данных, в соответствии с Федеральным
                    законом от 27.07.2006 года №152-ФЗ «О персональных данных»,
                    на условиях и для целей, определенных в Согласии на
                    обработку персональных данных
                  </div>
                  <Button
                    text={
                      result?.success == "success" ? "ОТПРАВЛЕНО" : "ОТПРАВИТЬ"
                    }
                    onClickAction={sendMail}
                    isSimple={false}
                    color="white"
                    isDisabled={!isReCAPTCHA || loading}
                  />
                </div>
              </form>
            </div>
          ) : (
            <>
              <div className="form-callback-after-send">
                <div>
                  <Image src={images.CheckCircle} alt="Успешно!" />
                </div>
                <h2 className="form-callback-after-send-text">
                  Ваше сообщение <b>отправлено успешно</b>
                </h2>
              </div>
            </>
          )}
        </div>
      </section>
      <div className="voprosy-otvety-divider-full-width"></div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const res = await axios.get(`${BACKEND_URL}/faq/`);
  const data = res.data;

  return {
    props: data,
  };
}
export default VoprosyOtvety;
