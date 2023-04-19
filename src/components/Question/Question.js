import React from 'react'
import { useState } from 'react'

const Question = ({ currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions }) => {
  const [selected, setSelected] = useState();
  const [error, setEror] = useState(false);



  return (
    <div>
      <h1>Question {currQues + 1}</h1>


    </div>
  )
}

export default Question
