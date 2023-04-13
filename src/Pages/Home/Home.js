import React from 'react'
import { Button, MenuItem, TextField } from '@material-ui/core'
import Categories from "../../Data/Categories"
import "./Home.css"

const Home = () => {
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz settings</span>
                <div className='settings_select'>
                    <TextField style={{ marginBottom: 25 }} label='Enter your name' variant='outlined'></TextField>
                    <TextField select label='Select category' variant='outlined' style={{ marginBottom: 30 }}>
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
                    <Button variant='contained' color='primary' size='large'>
                        Start Quiz
                    </Button>


                </div>
            </div>
            <img src="/quiz.svg" className='banner' alt="quiz-image"></img>
        </div>
    )
}

export default Home
