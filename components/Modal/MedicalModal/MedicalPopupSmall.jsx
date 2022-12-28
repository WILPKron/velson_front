import { useCallback, useEffect, useRef, useState } from "react";

const MedicalPopupSmall = ({ data, showSmallPopup, hideSmallPopup, clickLinkMinPopup }) => {
    return (
        <>
            {showSmallPopup ? <div className="medical-popup-small__wrapper">
                <div className="medical-popup-small__content">
                    <div className="medical-popup-small__close" onClick={hideSmallPopup}>
                        <svg width={10} height={10} viewBox={'0 0 18 18'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
                            <path d="M1 17L17 1M1 1L17 17" stroke={'#919191'} strokeLinecap={'round'}/>
                        </svg>
                    </div>
                    <div className="medical-popup-small__text" dangerouslySetInnerHTML={{ __html: data.text }}></div>
                    <a className="medical-popup-small__btn" href={data.btnLink} onClick={clickLinkMinPopup}
                       target="_blank"
                    >
                        {data.btnText}
                    </a>
                </div>
            </div> : null}
        </>
    );
};

export default MedicalPopupSmall;
