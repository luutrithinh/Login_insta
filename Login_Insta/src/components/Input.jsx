import React from 'react'
import './input.css'

export default function Input({ label, type, id, placeholder }) {

    return (
        <div className='input'>
            <label>{label}</label>
            <input className='text' type={ type} placeholder={ placeholder} />
        </div>
    )
}
