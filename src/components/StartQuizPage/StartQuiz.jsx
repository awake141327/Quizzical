/* eslint-disable react/prop-types */
import "./StartQuiz.css";

const StartQuiz = ({ setShowQuiz }) => {
  return (
    <div className="SQ_container">
      <h1 className="SQ_heading">Quizzical</h1>
      <p className="SQ_tagline">Be Ready. Be Smart. Be Noticed! </p>
      <button className="SQ_btn" onClick={() => setShowQuiz((prev) => !prev)}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartQuiz;
