import React from "react";
import Answeroptions from "./Answeroptions";  

function questionCard({question,onSelect, selectedAnswer}) {
  return(
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option,index)=>
      <Answeroptions
        key={index}
        option={option}
        isSelected={selectedAnswer === option}
        onSelect={onSelect}
      />
      )}
    </div>
  )
}
export default questionCard;