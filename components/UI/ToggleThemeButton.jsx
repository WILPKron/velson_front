import React from "react";
import moonImg from "../../assets/images/moon.svg";
import sunBlue from "../../assets/images/sun.svg";
import Image from "next/image";
import sunLight from "../../assets/images/sunLight.svg";

import MoonBlue from "../../assets/images/moonBlue.svg";

const ToggleThemeButton = ({ toggleAction, isWhite }) => {
  return (
    <div
      className={`toggleTheme ${isWhite ? "" : "sunActive"}`}
      onClick={toggleAction}
    >
      {isWhite ? (
        <Image
          src={MoonBlue}
          width="28"
          height="28"
          className={`icon icon-moon ${isWhite && "active"}`}
        />
      ) : (
        <Image
          src={moonImg}
          width="28"
          height="28"
          className={`icon icon-moon ${isWhite && "active"}`}
        />
      )}

      {isWhite ? (
        <Image
          src={sunLight}
          width="28"
          height="28"
          className={`icon icon-sun ${isWhite && "active"}`}
        />
      ) : (
        <Image
          src={sunBlue}
          width="28"
          height="28"
          className={`icon icon-sun ${isWhite && "active"}`}
        />
      )}
    </div>
  );
};

export default ToggleThemeButton;
