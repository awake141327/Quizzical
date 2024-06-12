/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import QandA from "../QandA/QandA";
import axios from "axios";
import "./Quiz.css";

const Quiz = ({ setShowQuiz }) => {
  const [quizData, setQuizData] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        console.log(response.data.results);
        setQuizData(response.data.results);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAnswers(true);
  };

  const handleReset = () => {
    setShowQuiz(false);
  };

  return (
    <form className="quiz_container" onSubmit={handleSubmit}>
      {quizData.length > 0 ? (
        quizData?.map((data, index) => (
          <QandA
            quizData={data}
            allData={quizData}
            showAnswers={showAnswers}
            key={index}
          />
        ))
      ) : !error ? (
        <p className="quiz_loader">Loading...</p>
      ) : (
        <p className="quiz_loader">Failed to Fetch Data. Please try again...</p>
      )}
      {quizData.length > 0 ? (
        !showAnswers ? (
          <button className="submit-btn" disabled={showAnswers}>
            Check Answers
          </button>
        ) : (
          <button onClick={handleReset} className="submit-btn">
            Reset
          </button>
        )
      ) : null}
    </form>
  );
};

export default Quiz;
