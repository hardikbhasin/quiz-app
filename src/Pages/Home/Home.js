import React from 'react'
import { Button, MenuItem, TextField } from '@material-ui/core'
import Categories from "../../Data/Categories"
import "./Home.css"
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName,fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
     const history = useHistory();
    const handelSubmit = () => { 
        if(!category || !difficulty || !name){
            setError(true)
            return;
        }
        else{
            setError(false)
            fetchQuestions(category,difficulty);
            history.push('/quiz');
        }
    };
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz settings</span>
                <div className='settings_select'>
                    {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                    <TextField style={{ marginBottom: 25 }} label='Enter your name' variant='outlined'
                        onChange={(e) => setName(e.target.value)}></TextField>
                    <TextField select label='Select category' variant='outlined' style={{ marginBottom: 30 }}
                        onChange={(e) => setCategory(e.target.value)} value={category}>
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}

                                </MenuItem>

                            ))
                        }

                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setDifficulty(e.target.value)} value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button variant='contained' color='primary' size='large' onClick={handelSubmit}>
                        Start Quiz
                    </Button>


                </div>
            </div>
            <img src="/quiz.svg" className='banner' alt="quiz-image"></img>
        </div>
    )
}

export default Home
