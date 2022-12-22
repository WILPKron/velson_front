import React from "react";

import Button from "../UI/Button";

const TestWrapper = ({ setStep }) => {
  return (
    <div className="test-wrapper">
      <div className="test-start-page-wrapper">
        <div className="test-page-heading">
          <h1 itemProp="name">
            Уровень тяжести <b>бессонницы</b>
          </h1>
          <div className="test-page-heading-description">
            Пройдите наш онлайн-тест, чтобы узнать свой уровень тяжести
            бессоницы
          </div>
          <Button
            text="Пройти тест"
            onClickAction={() => setStep(1)}
            isSimple={false}
            color="white"
          />
        </div>
      </div>
      <div className="test-bg-elements"></div>
    </div>
  );
};
export default TestWrapper;
