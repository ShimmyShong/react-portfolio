import React from 'react';
import '../../styles/Body.css'
import Coolectibles from '../../images/Project22.png'
import outNAbout from '../../images/outnabout.png'
import weatherApp from '../../images/chrome_fzmKja5Eqe.png'
import quizSite from '../../images/chrome_2Aln1M73pI.png'
import gitHub from '../../images/github-mark.png'

export default function Portfolio() {
    return (
        <div className='container'>
            <h1 className='title'>Portfolio</h1>
            <div className='grid'>
                <div className='project'>
                    <img className='project-img' src={Coolectibles} alt='Coolectibles' />
                    <div className='project-info'>
                        <a href='https://blooming-retreat-76948.herokuapp.com/' alt='deployed project'>Coolectibles</a>
                        <a href='https://github.com/ds055/collectible-database' target='_blank' rel='noopener noreferrer'>
                            <img
                                src={gitHub}
                                alt='GitHub Repository'
                                className='github-icon'
                            />
                        </a>
                    </div>
                </div>

                <div className='project'>
                    <img className='project-img' src={outNAbout} alt="Out 'n' About" />
                    <div className='project-info'>
                        <a href='https://jtpheonix13.github.io/stunning-guacamole/' alt='deployed project'>Out 'n' About</a>
                        <a href='https://github.com/jtpheonix13/stunning-guacamole' target='_blank' rel='noopener noreferrer'>
                            <img
                                src={gitHub}
                                alt='GitHub Repository'
                                className='github-icon'
                            />
                        </a>
                    </div>
                </div>

                <div className='project'>
                    <img className='project-img' src={weatherApp} alt='Weather App' />
                    <div className='project-info'>
                        <a href='https://shimmyshong.github.io/weather-dashboard/' alt='deployed project'>Weather App</a>
                        <a href='https://github.com/ShimmyShong/weather-dashboard' target='_blank' rel='noopener noreferrer'>
                            <img
                                src={gitHub}
                                alt='GitHub Repository'
                                className='github-icon'
                            />
                        </a>
                    </div>
                </div>

                <div className='project'>
                    <img className='project-img' src={quizSite} alt='Quiz Site' />
                    <div className='project-info'>
                        <a href='https://shimmyshong.github.io/basic-quiz-website/' alt='deployed project'>Quiz Site</a>
                        <a href='https://github.com/ShimmyShong/basic-quiz-website' target='_blank' rel='noopener noreferrer'>
                            <img
                                src={gitHub}
                                alt='GitHub Repository'
                                className='github-icon'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}