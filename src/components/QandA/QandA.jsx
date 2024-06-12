/* eslint-disable react/prop-types */
import { useState } from "react";
import he from "he";
import "./QandA.css";

const QandA = ({ quizData, showAnswers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const correctAnswer = [quizData.correct_answer];
  const incorrectAnswers = quizData.incorrect_answers;
  const allAnswers = correctAnswer.concat(incorrectAnswers);
  const [shuffledAnswers] = useState(shuffleArray(allAnswers));

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function handleChange(e) {
    setSelectedAnswer(e.target.value);
  }

  return (
    <div className="qa_container">
      <h4 className="qa_question">{he.decode(quizData.question)}</h4>
      <div className="qa_answer_container">
        <div className="answers-list">
          <input
            type="radio"
            value={shuffledAnswers[0]}
            name={he.decode(quizData.question)}
            onChange={handleChange}
            checked={selectedAnswer === shuffledAnswers[0]}
            disabled={showAnswers}
          />
          <div
            className="radio-tile"
            style={
              showAnswers && correctAnswer[0] === shuffledAnswers[0]
                ? { background: "#94D7A2" }
                : {}
            }
          >
            <label>{he.decode(shuffledAnswers[0])}</label>
          </div>
        </div>
        <div className="answers-list">
          <input
            type="radio"
            value={shuffledAnswers[1]}
            name={he.decode(quizData.question)}
            onChange={handleChange}
            checked={selectedAnswer === shuffledAnswers[1]}
            disabled={showAnswers}
          />
          <div
            className="radio-tile"
            style={
              showAnswers && correctAnswer[0] === shuffledAnswers[1]
                ? { background: "#94D7A2" }
                : {}
            }
          >
            <label>{he.decode(shuffledAnswers[1])}</label>
          </div>
        </div>
        <div className="answers-list">
          <input
            type="radio"
            value={shuffledAnswers[2]}
            name={he.decode(quizData.question)}
            onChange={handleChange}
            checked={selectedAnswer === shuffledAnswers[2]}
            disabled={showAnswers}
          />
          <div
            className="radio-tile"
            style={
              showAnswers && correctAnswer[0] === shuffledAnswers[2]
                ? { background: "#94D7A2" }
                : {}
            }
          >
            <label>{he.decode(shuffledAnswers[2])}</label>
          </div>
        </div>
        <div className="answers-list">
          <input
            type="radio"
            value={shuffledAnswers[3]}
            name={he.decode(quizData.question)}
            onChange={handleChange}
            checked={selectedAnswer === shuffledAnswers[3]}
            required
            disabled={showAnswers}
          />
          <div
            className="radio-tile"
            style={
              showAnswers && correctAnswer[0] === shuffledAnswers[3]
                ? { background: "#94D7A2" }
                : {}
            }
          >
            <label>{he.decode(shuffledAnswers[3])}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;
