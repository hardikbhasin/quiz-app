import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Result = ({ name, score }) => {
  const history= useHistory();
  useEffect(() => {
    if (!name) {
      history.push("/");

    }

  }, [name,history]);
  return (
    <div>
      


    </div>
  )
}

export default Result
