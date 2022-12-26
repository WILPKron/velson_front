import { useCallback, useEffect, useRef, useState } from "react";

const MedicalPopupBig = () => {



    const [showBigPopup, setShowBigPopup] = useState(false);
    const clickLinkPopup = () => {
        sessionStorage.setItem("keyLink", "value");
        setShowBigPopup(false)
    }
    const hidePopup = () => {
        setShowBigPopup(false)
        let i = 2
        i--;
        setTimeout(function () {
            if (i === 1) {
                setShowBigPopup(true)
            }
        }, 300000)
        if (!document.querySelector('.medical-popup-small__wrapper')) {
            setTimeout(() => {
                console.log(' появление маленького попапа')
            }, 2000)
        }
    }
    useEffect(() => {
        // document.body.style.overflow = showBigPopup ? 'hidden' : ''
        if (typeof window !== 'undefined') {
            if (!location.hash && location.pathname === '/' && !sessionStorage.getItem("keyLink")) {
                setTimeout(() => {
                    setShowBigPopup(true)
                }, 15000)
            }
        }
    }, [])


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
                        <img  alt=""/>
                    </div>
                    <div className="medical-popup-big__content">
                        <div className="medical-popup-big__text">
                        </div>
                        <a className="medical-popup-big__btn" href="" onClick={clickLinkPopup} target="_blank">
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
