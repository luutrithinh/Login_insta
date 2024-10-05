import React from 'react'
import { useState } from 'react'
import Input from '../Input'
import './login.css'
import logo from './assets/images/logo.png'
import Micro from './assets/images/Micro.png'
import CHplay from './assets/images/CHplay.png'

export default function Login() {
    return (
        <form action="">
            <div className='header'>
                <h1>Instagram</h1>
                <Input className='Name' placeholder="Enter full name" id="name" ></Input>
                <Input classNam='Password' type="password" placeholder="Password" id="Password"></Input>
                <button className='login'>Login</button>
                <div className="divider">
                    <span>OR</span>
                </div>
                <table className='Loo'>
                    <th>
                        <td className='Logo'>
                            <img className='image' src={logo} alt="" width="16" height="16" />
                        </td>
                        <td className='DD'>
                            <a className='facebook' href="">Login with facebook</a> <br></br>
                        </td>
                    </th>
                </table>
                <a href="" className="forgot">Forgot your password?</a>

            </div>
            <div className="signup">Don't have an account? <a href="#">Sign up</a></div>
            <div className="get-app">Get the app.</div>
            <table className='anotherapp'>
                <th>
                    <td>
                        <img src={Micro} alt="" width="134.275" height="40.50" />
                    </td>
                    <td>
                        <img src={CHplay} alt="" width="134.275" height="40.50" />
                    </td>
                </th>
            </table>

        </form>

    )
}
