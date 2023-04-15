import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState()
  const [currQues, setCurrQues] = useState(0)




  useEffect(() => {
    console.log(questions);
    setOptions(questions && handelShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers //spread operator as there are 3 incorrect options while 1 is correct
    ])
    );

  }, [questions]);
  console.log(options);
  const handelShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  }



  return (
    <div>
      <span className='subtitle'>
        Welcome, {name}
      </span>
      {questions ? (<>Questions</>) :
        (
          // loader till then questions will be fetched from api
          <CircularProgress 
            style={{ margin: 100 }}
            color='inherit'
            size={150}
            thickness={1} 
            />
          )}


    </div>
  )
}

export default Quiz
