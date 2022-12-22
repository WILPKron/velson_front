import { useCallback, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FormData from "form-data";
import Image from "next/image";

import Button from "../../components/UI/Button";

import CheckCircle from "../../assets/images/CheckCircle.png";

import { REACT_APP_SITE_KEY } from "../../utils/siteKey";
import { BACKEND_URL } from "../../pages/api/config";

const Modal = ({ show, close }) => {
  const [subject, setsubject] = useState("");
  const [from, setfrom] = useState("");
  const [body, setbody] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isReCAPTCHA, setIsReCAPTCHA] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const ref = useRef();

  const formData = new FormData();
  formData.append("name", subject);

  const textarea =
    typeof document !== "undefined" &&
    document.querySelector("#feedback-modal .g-recaptcha-response");

  const value = typeof document !== "undefined" && textarea?.value;

  formData.append("recaptcha", value);
  formData.append("text", body);
  formData.append("email", from);

  let sendMail = () => {
    if (isReCAPTCHA || loading) {
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
    }
    if (!isSent) {
      ref?.current?.reset();
    }
  };

  useEffect(() => {
    let reOpenModalForm = () => {
      setIsReCAPTCHA(false);
    };

    reOpenModalForm();
  }, [isSent]);

  const handleChange = () => {
    !null ? setIsReCAPTCHA(true) : setIsReCAPTCHA(false);
  };

  const types = result?.errors?.map((item) => item.type);
  return (
    <>
      {show ? (

        <div
          className="modalContainer"
          onClick={() => {
            close();
            setIsSent(false);
          }}
        >
          <div
            id="feedback-modal"
            className={`modal ${result?.success !== true ? "" : "sent"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="close"
              onClick={() => {
                close();
                setIsSent(false);
                setResult([]);
              }}
            >
              <div>
                {/* <Image src={closeIcon} width={32} height={32} alt="Закрыть" /> */}
              </div>
            </div>
            {!result?.success ? (
              <>
                <header className="modal_header">
                  <h2 className="modal_header-title">
                    Задать свой <b>вопрос</b>
                  </h2>
                </header>
                <main className="modal_content">
                  <section>
                    <p className="modal__description">
                      Если у вас возник вопрос, пожалуйста, свяжитесь с нами.{" "}
                      <br /> Внимание! Обращение на сайт не является заменой
                      консультации у врача
                    </p>
                  </section>

                  <form action="" className="modal__input">
                    <input
                      type="text"
                      placeholder="ИМЯ"
                      onChange={(e) => setsubject(e.currentTarget.value)}
                      style={{
                        border: types?.includes("name") > 0 && "2px solid red",
                      }}
                    />
                    <input
                      type="email"
                      placeholder="E-MAIL"
                      onChange={(e) => setfrom(e.currentTarget.value)}
                      style={{
                        border: types?.includes("email") > 0 && "2px solid red",
                      }}
                    />
                    <textarea
                      wrap="hard"
                      cols="1"
                      rows="4"
                      type="text"
                      placeholder="ВАШ ВОПРОС"
                      onChange={(e) => setbody(e.currentTarget.value)}
                      style={{
                        border: types?.includes("text") > 0 && "2px solid red",
                      }}
                    />
                  </form>
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
                      onChange={handleChange}
                      onReset={() => setIsReCAPTCHA(true)}
                      ref={ref}
                    />
                  </div>
                  <>
                    {result?.errors?.map((i) => (
                      <div className="modal__error">{i.message}</div>
                    ))}
                  </>

                  <p className="modal__warning">
                    Нажимая кнопку «Отправить», я даю свое согласие на обработку
                    моих персональных данных, в соответствии с Федеральным
                    законом от 27.07.2006 года №152-ФЗ «О персональных данных»,
                    на условиях и для целей, определенных в Согласии на
                    обработку персональных данных
                  </p>
                </main>
                <footer className="modal_footer">
                  <Button
                    text={
                      result?.success == "success" ? "ОТПРАВЛЕНО" : "ОТПРАВИТЬ"
                    }
                    onClickAction={sendMail}
                    isSimple={false}
                    color="white"
                    isDisabled={!isReCAPTCHA || loading}
                  />
                </footer>
              </>
            ) : (
              <>
                <div className="modal__success">
                  <Image
                    width={80}
                    height={80}
                    src={CheckCircle}
                    alt="Успешно!"
                  />
                  <h2>Ваше сообщение</h2>
                  <h2 style={{ marginTop: 0 }}>
                    <b>отправлено успешно</b>
                  </h2>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
