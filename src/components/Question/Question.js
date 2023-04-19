import React from 'react'
import { useState } from 'react'
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({ currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions }) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const handelSelect=(i)=>{
    if(selected===i && selected===correct){
      return 'select';
    }
    else if(selected === i && selected !== correct){
      return 'wrong';
    }
    else if(i===correct){
      return 'select';
      

    }
    
  };
  const handelCheck=(i) =>{
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);


  };



  return (
    <div>
      <h1>Question {currQues + 1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            options &&
            options.map(i => (
              <button onClick={()=>handelCheck(i)}
                className={`singleOption ${selected && handelSelect(i)}`}
                key={i}
                disabled={selected}








              >{i}</button>

            ))
          }

        </div>


      </div>


    </div>

  )
}

export default Question
