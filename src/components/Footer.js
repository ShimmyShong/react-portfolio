import React from 'react'
import StackIcon from '../images/768px-Stack_Overflow_icon.svg.png'
import GitIcon from '../images/github-mark.png'
import LinkedIcon from '../images/LI-In-Bug.png'
import '../styles/Footer.css'


export default function Footer() {
    return (
        <div className='icon-container'>
            <img className='icon' src={GitIcon} alt="Github Icon" />
            <img className='icon' src={StackIcon} alt="Stack Overflow Icon" />
            <img className='icon' src={LinkedIcon} alt="LinkedIn Icon" />
        </div>
    )
}