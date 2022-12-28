import { useCallback, useEffect, useRef, useState } from "react";

import { BACKEND_ADDRESS } from '../../../pages/api/config'

const MedicalPopupBig = ({ data, showBigPopup, hideBigPopup, clickLinkPopup }) => {
    return (
        <>
            {showBigPopup ? <div className="medical-popup-big__wrapper">
                <div className="medical-popup-big__background" onClick={hideBigPopup}></div>
                <div className="medical-popup-big">
                    <button className="medical-popup-big__close" onClick={hideBigPopup}>
                        <svg width={20} height={20} viewBox={'0 0 18 18'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
                            <path d="M1 17L17 1M1 1L17 17" stroke={'white'} strokeLinecap={'round'}/>
                        </svg>
                    </button>
                    <div className="medical-popup-big__image">
                        <img alt="" src={BACKEND_ADDRESS + data.image}/>
                    </div>
                    <div className="medical-popup-big__content">
                        <div className="medical-popup-big__text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                        <a className="medical-popup-big__btn" href={data.btnLink} onClick={clickLinkPopup} target="_blank">
                            {data.btnText}
                            <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 8.96569L17.4474 1M26 8.96569L17.4474 16.2941M26 8.96569H0" stroke="white" stroke-width="2"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div> : null}
        </>
    );
};

export default MedicalPopupBig;
