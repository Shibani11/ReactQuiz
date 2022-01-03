import { useState } from 'react';
import Quiz from './Components/Quiz';

function App() {
  const [quizStart,setQuizStart] = useState(false);
  
  const start = () => {
    setQuizStart(true)
  }
  
  return quizStart === false ? (
    <div className='container '>
      
      <h1  className=' bg-white text-purple-700 p-10 rounded-lg shadow' onClick={start}>Hello, Welcome to Quiz App. Please click here to start.</h1>
      
    </div>
  ) :
  (
    <Quiz />
  )
  
}

export default App;
