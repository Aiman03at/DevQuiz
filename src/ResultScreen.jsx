
function ResultScreen({ score, totalQuestions ,onRestart}){
  return(
    <div>
      <h2>Quiz Finished!</h2>
      <p>Your final score is: {score}/{totalQuestions}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  )

}
export default ResultScreen;