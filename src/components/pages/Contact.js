import React, { useState } from 'react';
import '../../styles/Body.css'

export default function Contact() {
    const [inputEmail, setInputEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [messageError, setMessageError] = useState('')

    function emailValidate() {
        const emailRegEx = /^([A-Za-z]|[0-9])+$/

        if (!inputEmail.match(emailRegEx)) {
            setEmailError('')
            return
        } else {
            setEmailError('This Email is not valid')
        }
    }

    function messageValidate() {
        if (inputMessage.trim().length === 0) {
            setMessageError('You must enter a message')
            console.log('error hit')
            return
        } else {
            setMessageError('')
            console.log('else hit')
        }
    }


    return (
        <div className='container'>
            <h1 className='title'>Contact Page</h1>
            <div className='contact-form'>
                <div className='form-field'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' />
                </div>
                <div className='form-field'>
                    <label htmlFor='email'>Email:</label>
                    <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} onBlur={emailValidate} type='email' id='email' name='email' />
                    <h2 className='description'>{emailError}</h2>
                </div>
                <div className='form-field'>
                    <label htmlFor='message'>Message:</label>
                    <textarea value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onBlur={messageValidate} id='message' name='message' rows='5'></textarea>
                    <h2 className='description'>{messageError}</h2>
                </div>
                <button type='submit'>Submit</button>
            </div>
        </div>
    );
}
