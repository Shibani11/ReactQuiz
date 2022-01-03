
const Questionaire = ({nextQuestion, showAnswer, handleAnswer, data: {question, correct_answer, answers}
}) => {

return(
  <div className="">
    <div className=" align-center">
    <div className=' bg-white text-purple-700 p-10 rounded-lg shadow'>
        <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html: question}} >
        </h2>
    </div>
    
    <div className=' grid grid-cols-2 gap-6 mt-6'>
        {answers.map((answer) => {
        const textColor = showAnswer === true ?
            answer === correct_answer ?
            'text-green-500' :
            'text-red-500' :
            'text-purple-700' ;

        return (    
            <button 
                className={`bg-white ${textColor} p-4 
                font-semibold rounded shadow`}
                onClick={() => handleAnswer
                (answer)}
                dangerouslySetInnerHTML={{ __html: answer}} />
            );
        })}
    </div>  
    </div>
    {showAnswer ===true && (
    <div align="center" >
        <row>
            <button className={`bg-white text-purple-700 p-4 font-semibold rounded shadow mt-6`} 
            onClick={nextQuestion}>
                Next Question
            </button>
        </row>
    </div>
    )} 
</div>
)};

export default Questionaire;