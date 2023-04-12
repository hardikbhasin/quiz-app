import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'
import "./Home.css"

const Home = () => {
    return (
        <div className='content'>
            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz settings</span>
                <div className='settings_select'>
                    <TextField style={{marginBottom:25}}label='Enter your name' variant='outlined'></TextField>
                    <TextField select label='Select category' variant='outlined' style={{marginBottom:30}}>
                        
                        <MenuItem>
                        </MenuItem>
                    </TextField>
                    

                </div>
            </div>
            <img src="/quiz.svg" className='banner' alt="quiz-image"></img>
        </div>
    )
}

export default Home
