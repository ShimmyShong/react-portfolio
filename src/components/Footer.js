import React from 'react'
import StackIcon from '../images/768px-Stack_Overflow_icon.svg.png'
import GitIcon from '../images/github-mark.png'
import LinkedIcon from '../images/LI-In-Bug.png'
import '../styles/Footer.css'


export default function Footer() {
    return (
        <div className='icon-container'>
            <a href='https://github.com/ShimmyShong'>
                <img className='icon' src={GitIcon} alt="Github Icon" />
            </a>
            <a href='https://stackoverflow.com/users/22328894/shimmyshong'>
                <img className='icon' src={StackIcon} alt="Stack Overflow Icon" />
            </a>
            <a href='https://www.linkedin.com/in/hunter-tran-b32098278/'>
                <img className='icon' src={LinkedIcon} alt="LinkedIn Icon" />
            </a>
        </div>
    )
}