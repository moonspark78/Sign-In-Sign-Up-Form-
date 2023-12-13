import React from 'react'
import "./LoginSignup.css"

import email from "../Components/Assets/email.png"
import user from "../Components/Assets/person.png"
import password from "../Components/Assets/password.png"

export const LoginSignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user} alt=''/>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='input'>
                <img src={email} alt=''/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={password} alt=''/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        <div className='forgot-password'> Lost Password? <span>Click Here!</span></div>
        <div className='submit-container'>
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
        </div>
    </div>
  )
}
