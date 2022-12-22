import { useCallback, useEffect, useRef, useState } from "react";

import { BACKEND_URL } from "../../pages/api/config";

const MedicalPopupBig = ({ show, close }) => {

    // const [subject, setsubject] = useState("");
    // const [from, setfrom] = useState("");
    // const [body, setbody] = useState("");
    // const [isSent, setIsSent] = useState(false);
    // const [isReCAPTCHA, setIsReCAPTCHA] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [result, setResult] = useState();
    // const ref = useRef();

    return (
        <>
            <div className="medical-popup-small__wrapper">
                <div className="medical-popup-small__content">
                    <div className="medical-popup-small__text">
                        <p>СПЕЦПРЕДЛОЖЕНИЕ СО СКИДКОЙ</p>
                    </div>
                    <a className="medical-popup-small__btn"
                       href="https://apteka.ru/product/vitaferr-n30-kaps-massoj-375mg-61e949823633dc4fea559f1c/?utm_source=petrovax&amp;utm_campaign=vitaferr.ru&amp;utm_medium=referral&amp;utm_term=Popup_bottom&amp;utm_content=other"
                       target="_blank"
                    >
                        Хочу скидку!
                    </a>
                </div>
            </div>
        </>
    );
};

export default MedicalPopupBig;
