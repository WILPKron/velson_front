import { useCallback, useEffect, useRef, useState } from "react";

import MedicalPopupBig from "./MedicalModal/MedicalPopupBig";
import MedicalPopupSmall from "./MedicalModal/MedicalPopupSmall";

const MedicalPopup = ({ data }) => {
    const [showBigPopup, setShowBigPopup] = useState(false);
    const [showSmallPopup, setShowSmallPopup] = useState(false);

    const [interShowPopupBig, setInterShowPopupBig] = useState(2);
    const [interShowPopupSmall, setInterShowPopupSmall] = useState(2);

    //  #BIG POPUP#
    const clickLinkPopup = () => {
        sessionStorage.setItem("keyLink", "value");
        setShowBigPopup(false)
    }

    const hideBigPopup = () => {
        setShowBigPopup(false)
        setInterShowPopupSmall(interShowPopupSmall - 1)
        setTimeout(() => {
            if (interShowPopupSmall === 1) {
                setShowBigPopup(true)
            }
        }, 300000)

        if (!showSmallPopup) {
            setTimeout(() => setShowSmallPopup(true), 2000)
        }
    }

    useEffect(() => {
        if(data?.large?.active === 'Y') {
            document.body.style = showBigPopup ? 'overflow: hidden' : false
        }
    }, [showBigPopup])

    useEffect(() => {
        if (!location.hash && location.pathname === '/' && !sessionStorage.getItem("keyLink")) {
            setTimeout(() => {
                setShowBigPopup(true)
            }, 15000)
        }
    }, [])
    //  #BIG POPUP#

    // #SMALL POPUP#

    const clickLinkMinPopup = () => {
        sessionStorage.setItem("keyLink", "value");
        setShowSmallPopup(false)
    }

    const hideSmallPopup = () => {
        setShowSmallPopup(false)
        setInterShowPopupSmall(interShowPopupSmall - 1)
        setTimeout(() => {
            if (interShowPopupSmall >= 0) {
                setShowSmallPopup(true)
            }
        }, 300000)
    }

    useEffect(() => {
        const pathname = '/'
        if (location.hash || location.pathname !== pathname) {
            if (!showSmallPopup && !sessionStorage.getItem("keyLink")) {
                setShowSmallPopup(true)
            }
        }
        const linksPage = document.querySelectorAll('.menu__item a')
        linksPage.forEach((linkPage) => {
            linkPage.addEventListener('click', () => {
                if (!showSmallPopup && !sessionStorage.getItem("keyLink")) {
                    setShowSmallPopup(true)
                }
            })
        })
    }, [])
    // #SMALL POPUP#

    return (
        <>
            {data?.large?.active === 'Y' ? <MedicalPopupBig
                data={data.large}
                showBigPopup={showBigPopup}
                hideBigPopup={hideBigPopup}
                clickLinkPopup={clickLinkPopup}
            ></MedicalPopupBig> : null}
            {data?.small?.active === 'Y' ? <MedicalPopupSmall
                data={data.small}
                showSmallPopup={showSmallPopup}
                hideSmallPopup={hideSmallPopup}
                clickLinkMinPopup={clickLinkMinPopup}
            ></MedicalPopupSmall> : null}
        </>
    );
};

export default MedicalPopup;
