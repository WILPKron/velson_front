import React from "react";
import Button from "../UI/Button";

const TestPage = ({
  item,
  step,
  route,
  answers,
  updateAnswers,
  sendResults,
}) => {
  return (
    <div className="test-wrapper">
      <div className="test-start-page-wrapper">
        <div className="test-page-heading">
          <p className="test-page-heading-step">
            Вопрос {item.step} из {answers?.length}
          </p>
          <div className="test-page-heading-description">{item.title}</div>

          {item.answers.map((question, index) => (
            <button
              className={`test-page-checkbox ${
                question.value ? "test-page-checkbox-active" : ""
              }`}
              onClick={() => updateAnswers(item.step, index, !question.value)}
            >
              <p>{question.text}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TestPage;
