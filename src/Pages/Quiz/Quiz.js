import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import './Quiz.css';
import Question from "../../components/Question/Question";
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

  }, [questions, currQues]);
  console.log(options);
  // to shuffle the options
  const handelShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  }
  return (
    <div className='quiz'>
      <span className='subtitle'>
        Welcome, {name}
      </span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}



          />


        </>
      ) :
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
