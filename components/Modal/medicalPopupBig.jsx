import { useCallback, useEffect, useRef, useState } from "react";

const MedicalPopupBig = ({ data }) => {
    const [showBigPopup, setShowBigPopup] = useState(data?.active === 'Y');
    const hidePopup = () => {
        setShowBigPopup(false)
    }
    useEffect(() => {
        document.body.style.overflow = showBigPopup ? 'hidden' : ''
    }, [showBigPopup])
    
    return (
        <>
            {showBigPopup ? <div className="medical-popup-big__wrapper">
                <div className="medical-popup-big__background" onClick={hidePopup}></div>
                <div className="medical-popup-big">
                    <button className="medical-popup-big__close" onClick={hidePopup}>
                        <svg width={20} height={20} viewBox={'0 0 18 18'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
                            <path d="M1 17L17 1M1 1L17 17" stroke={'white'} strokeLinecap={'round'}/>
                        </svg>
                    </button>
                    <div className="medical-popup-big__image">
                        <img src={'http://velson-back' + data.image} alt=""/>
                    </div>
                    <div className="medical-popup-big__content">
                        <div className="medical-popup-big__text" dangerouslySetInnerHTML={{__html: data.description}}>
                        </div>
                        <a href={data.btnLink} className="medical-popup-big__btn" target="_blank">
                            {data.btnText}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" id="link" width={20} height={20}>
                                <path d="M8 15l5-5-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div> : null}
        </>
    );
};

export default MedicalPopupBig;
