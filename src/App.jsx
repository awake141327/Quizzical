import { useState } from "react";
import StartQuiz from "./components/StartQuizPage/StartQuiz";
import Quiz from "./components/QuizPage/Quiz";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="App">
      {showQuiz ? (
        <Quiz setShowQuiz={setShowQuiz} />
      ) : (
        <StartQuiz setShowQuiz={setShowQuiz} />
      )}
    </div>
  );
}

export default App;
