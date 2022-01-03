import { useState, useEffect } from 'react';
import Question from '../Components/Question';

// const API_URL ='https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple';
const API_URL_SCIENCE_DIFFICULT = "https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple";
// const data1 = require("../Questions2.json");

export default function Quiz(){
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState([false]);

  useEffect(() => {
    fetch(API_URL_SCIENCE_DIFFICULT)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort( ()=> Math.random() -0.5),
        }))
        setQuestions(questions);
      });
  }, []);

  console.log("showAnswer",showAnswer);

  const handleAnswer =(answer) => {    

    //check for the answer
    if (!showAnswer) {
      if(answer === questions[currentIndex].correct_answer){
        //change score if correct
        setScore(score+1);
      }
    }
    setShowAnswer (true);
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    setCurrentIndex(currentIndex + 1);
  }

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
    <h1 className='text-3xl text-white font-bold'>Your Score is {score} !</h1>
  ) : (
      <Question 
        data={questions[currentIndex]} 
        showAnswer={showAnswer}
        handleAnswer={handleAnswer} 
        nextQuestion={nextQuestion}
      />
      )}
    </div>
  ) : (
    <div>
      <h1 className='text-2xl' text-white > Loading... </h1>
    </div>
  );
}
