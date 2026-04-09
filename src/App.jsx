import './App.css'
import { useState } from "react"

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

  const [currentquestion,setcurrentquestion] = useState(0);
  const[selectedanswer, setselectedanswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizfinished,setquizfinshed] = useState(false);
  console.log(userAnswers);
  return (
    
    <div >
      <h1>DevQuiz</h1>
      <h2>{questions[currentquestion].question}</h2>
      
        {questions[currentquestion].options.map((option,index)=><button key={index} onClick={() =>
           setselectedanswer(option)}
           className={selectedanswer===option ? "selected" : ""}>{option}</button>)}
{/* submit button*/ }
        
        {
          currentquestion == questions.length - 1 &&(
          <button onClick={() =>{ setUserAnswers([...userAnswers, selectedanswer])
            setquizfinshed(true)}
          }
        >
          Submit
        </button>)}


{/* next button*/ }
        <button onClick={() => {
          setcurrentquestion(currentquestion + 1)
          setselectedanswer(null)
          setUserAnswers([...userAnswers, selectedanswer])}
        }
        disabled={currentquestion == questions.length - 1}>Next</button>
        
    </div>
  )
    
}

export default App
