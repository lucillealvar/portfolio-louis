import React from 'react';
import './Header.scss';
import LinkedIn from '../../assets/icons/linkedin.png';
import Pdf from '../../assets/icons/pdf.png';

function Header(){
    return(
        <div className='header'>
            <div className='header-title'>
            <h1>Louis Langlet</h1>
            <h3>Intermediate Game Designer</h3>
            </div>
            <div className='header-socials'>
                <a href='https://www.linkedin.com/in/langletlouis/' rel="noreferrer" target='_blank'>
                <img className='linkedin' src={LinkedIn} alt='linkedin'/>
                </a>
                <a href ={process.env.PUBLIC_URL + '/resume.pdf'} rel="noreferrer" target='_blank'>
                <img className='pdf' src={Pdf} alt='resume'/>
                </a>
            </div>
        </div>
    )
}

export default Header;