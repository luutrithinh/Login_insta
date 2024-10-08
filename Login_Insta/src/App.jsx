import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Footer from './components/footer'
import Phone from './components/Login/image'

function App() {
  return (
    <>
    <div className='content'>
    <Phone></Phone>
    <Login className='login'></Login>
    </div>
      <Footer></Footer>
    </>
  )
}

export default App
