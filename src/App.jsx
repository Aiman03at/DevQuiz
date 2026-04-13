import './App.css'
import { useState } from "react";
import ResultScreen from './ResultScreen';
import StartScreen from './StartScreen';

const questions =[{
  id:1,
  question:"What does hTMl stand for?",
  options:["Hyper Text Markup Language",
    "Home Tool Markup Language",
    "Hyperlinks and Text Markup Language",
    "Hyperlinking Text Marking Language"

  ],
  correctAnswer:"Hyper Text Markup Language"
},
{
  id:2,
  question:"What does CSS stand for?",
  options:["Creative Style Sheets",
    "Cascading Style Sheets",
    "Computer Style Sheets",
    "Colorful Style Sheets"

  ],
  correctAnswer:"Cascading Style Sheets"
},
{
  id:3,
  question:"What does JS stand for?",
  options:["JavaScript",
    "JavaSource",
    "JustScript",
    "JScript"

  ],
  correctAnswer:"JavaScript"
} 
]


function App() {

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const[selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished,setQuizFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
 
  const[score,setScore] = useState(0);
  
  return (
    
    <div >
      <h1>DevQuiz</h1>


      {/*Quiz Finished*/} 

{
  !quizStarted?(<StartScreen onStart={() => setQuizStarted(true)} />):


quizFinished ? (
  <ResultScreen score={score} 
  totalQuestions={questions.length} onRestart={() => {
      setCurrentQuestion(0);
      setSelectedAnswer(null); 
      setQuizFinished(false); 
      setScore(0); 
      setUserAnswers([])
      setQuizStarted(false);}}>
  </ResultScreen>
):(
<div>

      <h2>{questions[currentQuestion].question}</h2>
      
        {questions[currentQuestion].options.map((option,index)=><button key={index} onClick={() =>
           setSelectedAnswer(option)}
           className={selectedAnswer===option ? "selected" : ""}>{option}</button>)}

           {/* next button*/ }
        <button onClick={() => {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
          setUserAnswers([...userAnswers, selectedAnswer])}
        }
        disabled={currentQuestion == questions.length - 1}>Next</button>
{/* submit button*/ }
        
        {
          currentQuestion == questions.length - 1 &&(
          <button onClick={() =>{ 
           const finalAnswers = [...userAnswers, selectedAnswer]
            const finalScore= finalAnswers.filter((answer,index) => 
              answer=== questions[index].correctAnswer
            ).length
            setUserAnswers(finalAnswers)
            setScore(finalScore)
            setQuizFinished(true)
            console.log('userAnswers:', finalAnswers);
            console.log('correctAnswers:', questions.map(q => q.correctAnswer));

          }
          }
          
        >
          Submit
        </button>)}
</div>

        )}
        
    </div>
  )
}  


export default App;
