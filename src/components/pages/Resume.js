export default function Resume() {
    const frontendProficiencies = [
        'HTML',
        'CSS',
        'JavaScript (ES6+)',
        'React',
        'Redux',
        'Bootstrap',
        'Styled Components',
    ];

    const backendProficiencies = [
        'Node.js',
        'Express.js',
        'MongoDB',
        'RESTful APIs',
        'Authentication (JWT)',
    ];

    return (
        <div className='container'>
            <h1 className='title'>Resume</h1>
            <h2 className='description'>
                Download my{' '}
                <a href='https://mail.google.com/mail/u/6?ui=2&ik=8f13ad0ca7&attid=0.1&permmsgid=msg-f:1766816820942298286&th=1884fe89a3735cae&view=att&disp=inline'>Resume</a>
            </h2>
            <div className='proficiencies'>
                <h3>Frontend Proficiencies:</h3>
                <ul>
                    {frontendProficiencies.map((skill, index) => (
                        <li className='bullet' key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className='proficiencies'>
                <h3>Backend Proficiencies:</h3>
                <ul>
                    {backendProficiencies.map((skill, index) => (
                        <li className='bullet' key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}