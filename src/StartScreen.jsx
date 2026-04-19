function startScreen({onStart}){
  return(
    <div>
      <h1>Welcome to <DevQuiz></DevQuiz>!</h1>
      <p>Test your knowledge of web development with our fun and interactive quiz.</p>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  )
}
export default startScreen;