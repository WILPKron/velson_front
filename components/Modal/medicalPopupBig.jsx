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
            { false ? <div className="medical-popup-big__wrapper">
                <div className="medical-popup-big__background"></div>
                <div className="medical-popup-big">
                    <div className="medical-popup-big__image">
                        <img src="https://vitaferr.ru/upload/iblock/1a1/34wc6dxirgig7erltki31b4qz1g4bpsf.png" alt=""/>
                    </div>
                    <div className="medical-popup-big__content">
                        <div className="medical-popup-big__text">
                            <p><span>Спецпредложение</span><br/> со скидкой</p>
                        </div>
                        <a href="https://apteka.ru/product/vitaferr-n30-kaps-massoj-375mg-61e949823633dc4fea559f1c/?utm_source=petrovax&utm_campaign=vitaferr.ru&utm_medium=referral&utm_term=Popup_main&utm_content=other" className="medical-popup-big__btn">
                            Купить на Аптека.ру
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" id="link" width={20} height={20}>
                                <path d="M8 15l5-5-5-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div> : null }
        </>
    );
};

export default MedicalPopupBig;
