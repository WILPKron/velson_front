import { useCallback, useEffect, useRef, useState } from "react";

import { BACKEND_URL } from "../../pages/api/config";

const MedicalPopupSmall = ({ data }) => {

  const [showSmallPopup, setShowSmallPopup] = useState(false);
  const clickLinkMinPopup = () => {
    sessionStorage.setItem("keyLink", "value");
    setShowSmallPopup(false)
  }
  const hideMinPopup = () => {
    setShowSmallPopup(false)
    let i = 2
    i--;
    setTimeout(function () {
      if (i >= 0) {
        setShowSmallPopup(true)
      }
    }, 300000)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname ='/'
      if (location.hash || location.pathname !== pathname) {
        if (!document.querySelector('.medical-popup-small__wrapper') && !sessionStorage.getItem("keyLink")) {
          setShowSmallPopup(true)
        }
      }
    }
    const linksPage = document.querySelectorAll('.menu__item a')
    linksPage.forEach((linkPage) => {
      linkPage.addEventListener('click', () => {
        if (!document.querySelector('.medical-popup-small__wrapper') && !sessionStorage.getItem("keyLink")) {
          setShowSmallPopup(true)
        }
      })
    })

  }, [])



    return (
        <>
            {showSmallPopup ? <div className="medical-popup-small__wrapper">
                <div className="medical-popup-small__content">
                    <div className="medical-popup-small__close" onClick={hideMinPopup}>
                        <svg width={10} height={10} viewBox={'0 0 18 18'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
                            <path d="M1 17L17 1M1 1L17 17" stroke={'#919191'} strokeLinecap={'round'}/>
                        </svg>
                    </div>
                    <div className="medical-popup-small__text">
                    </div>
                    <a className="medical-popup-small__btn" href="" onClick={clickLinkMinPopup}
                       target="_blank"
                    >
                    </a>
                </div>
            </div> : null}
        </>
    );
};

export default MedicalPopupSmall;
