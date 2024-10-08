import React from 'react'
import { useState } from 'react'
import Input from '../Input'
import './login.css'
import logo from './assets/images/logo.png'
import Micro from './assets/images/Micro.png'
import CHplay from './assets/images/CHplay.png'
import Insta from './assets/images/Instagram.png'
import Phone from './assets/images/Phone.png'

export default function Login() {
    return (
        <form className='main' action="">
            <div className='header'>
                <h1><img src={Insta} alt="" width="175" height="51" /></h1>
                <Input className='Name' placeholder="Enter full name" id="name" ></Input>
                <Input classNam='Password' type="password" placeholder="Password" id="Password"></Input>
                <button className='login'>Login</button>
                <div className="divider">
                    <span>OR</span>
                </div>
                <div className="facebook-login">
                    <img src={logo} alt="Facebook Logo" className="facebook-logo"/>
                        <span className="login-text">Login with facebook</span>
                </div> 
                <br></br>
                <a href="" className="forgot">Forgot password?</a>

            </div>
            <div className="signup"> Don't have an account? <a href="#">Sign up</a></div>
            <div className="get-app">Get the app.</div>
            <div className="anotherapp">
                <div className="image-container">
                    <img className='Micro' src={Micro} alt="" width="134.275" height="40.50" />
                </div>
                <div className="image-container">
                    <img className='CHplay' src={CHplay} alt="" width="134.275" height="40.50" />
                </div>
            </div>
        </form>

    )
}
