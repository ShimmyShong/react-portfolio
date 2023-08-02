import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navigation from './Navigation';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe')

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        else if (currentPage === 'Contact') {
            return <Contact />
        }
        else if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        else {
            return <Resume />
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </>
    )
}