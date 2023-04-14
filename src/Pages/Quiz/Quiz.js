import React, { useEffect, useState } from 'react'

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState()
  const [currQues, setCurrQues] = useState(0)




  useEffect(() => {
    console.log(questions);
    setOptions(questions && handelShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers
    ])
    );

  }, [questions]);
   console.log(options);
  const handelShuffle=(optionss) =>{
    return optionss.sort(()=>Math.random()-0.5);
  }



  return (
    <div>
      Quiz page
    </div>
  )
}

export default Quiz
