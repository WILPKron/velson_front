import React from "react";

import { images } from "../../constants/index";

import Image from "next/image";
const Button = ({
  text,
  onClickAction = "()=>{}",
  isSimple = "false",
  color = "white",
  isDisabled = false,
  withIcon = false,
}) => {
  return (
    <div
      className={`default-button ${color} ${isSimple ? "no-bg" : "bg"} ${
        isDisabled ? "disabled" : ""
      }`}
      onClick={onClickAction}
    >
      <span className="default-button__text">{text}</span>

      {withIcon && (
        <>
          color == "white" && (
          <Image
            className="default-button__icon"
            src={images.ArrowRight}
            alt="icon"
          />
          ) color == "blue" && (
          <Image
            className="default-button__icon"
            src={images.ArrowRightWhite}
            alt="icon"
          />
          )
        </>
      )}
    </div>
  );
};

export default Button;
