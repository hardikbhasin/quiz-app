import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from "@material-ui/core";
import './Result.css'

const Result = ({ name, score }) => {
  const history = useHistory();
  useEffect(() => {
    if (!name) {
      history.push("/");

    }

  }, [name, history]);
  return (
    <div className='result'>
      <span className='title'>
        Final score : {score}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
          href="/"


        >
          Go to Home Page
        </Button>

      </span>



    </div>
  )
}

export default Result
