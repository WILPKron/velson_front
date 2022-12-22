import React from "react";

const BlockWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div className={`block__container ${[...classNames]}`} id={idName}>
        <Component />
      </div>
    );
  };

export default BlockWrapper;
