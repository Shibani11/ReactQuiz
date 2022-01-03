import { useState } from 'react';
import Quiz from './Components/Quiz';

function App() {
  const [quizStart,setQuizStart] = useState(false);
  
  const start = () => {
    setQuizStart(true)
  }
  
  return quizStart === false ? (
    <div>
      <button onClick={start}>
        Start
      </button>
    </div>
  ) :
  (
    <Quiz />
  )
  
}

export default App;