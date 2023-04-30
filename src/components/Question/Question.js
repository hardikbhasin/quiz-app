import React from 'react'
import { useState } from 'react'
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Question = ({ currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  }) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const handelSelect = (i) => {
    if (selected === i && selected === correct) {
      return 'select';
    }
    else if (selected === i && selected !== correct) {
      return 'wrong';
    }
    else if (i === correct) {
      return 'select';


    }

  };
  const handelCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);


  };
  const history = useHistory();
  const handelNext = () => {
    
    /* if the question no is greater than 8, then the quiz will be over and move to the result page
     as indexing is from zero so handeled using no "8"*/
    if (currQues > 8) {
      history.push('/result')
    }
    // if option is selected then setSelected is used to store the selected option
    else if (selected) {
      setCurrQues(currQues + 1);
      setSelected()

    }
    // else error to be displayed in case no option is selected and we are clicking next question
    else {
      setError("Please select an option first");
    }
  };
  const handelQuit = () => {
    history.push('/result')

  };


  return (
    <div className='question'>
      <h1>Question {currQues + 1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            options &&
            options.map(i => (
              <button onClick={() => handelCheck(i)}
                className={`singleOption ${selected && handelSelect(i)}`}
                key={i}
                disabled={selected}
              >{i}</button>

            ))
          }

        </div>

        <div className='controls'>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handelQuit}
          >

            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handelNext}
          >
            Next Question
          </Button>

        </div>
      </div>
    </div>

  )
}

export default Question
