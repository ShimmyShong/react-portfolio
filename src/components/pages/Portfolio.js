import React from 'react';
import '../../styles/Body.css'

export default function Portfolio() {
    return (
        <div className='container'>
            <h1 className='title'>Portfolio</h1>
            <div className='grid'>
                <div className='project'>
                    <img className='project-img' src='https://via.placeholder.com/300' alt='Project 1' />
                    <div className='project-info'>
                        <a href='#' alt='deployed project'>Project Name</a>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                            <img
                                src='https://via.placeholder.com/30'
                                alt='GitHub Repository'
                                className='github-icon'
                            />
                        </a>
                    </div>
                </div>

                <div className='project'>
                    <img className='project-img' src='https://via.placeholder.com/300' alt='Project 2' />
                    <div className='project-info'>
                        <a href='#' alt='deployed project'>Project Name</a>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                            <img
                                src='https://via.placeholder.com/30'
                                alt='GitHub Repository'
                                className='github-icon'
                            />
                        </a>
                    </div>
                </div>

                <div className='project'>
                    <img className='project-img' src='https://via.placeholder.com/300' alt='Project 3' />
                    <div className='project-info'>
                        <a href='#' alt='deployed project'>Project Name</a>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                            <img
                                src='https://via.placeholder.com/30'
                                alt='GitHub Repository'
                                className='github-icon'
                            />
                        </a>
                    </div>
                </div>

                <div className='project'>
                    <img className='project-img' src='https://via.placeholder.com/300' alt='Project 4' />
                    <div className='project-info'>
                        <a href='#' alt='deployed project'>Project Name</a>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                            <img
                                src='https://via.placeholder.com/30'
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