import React from 'react';
import './Header.scss';
import LinkedIn from '../../assets/icons/linkedin.png';
import Pdf from '../../assets/icons/pdf.png';

function Header(){
    return(
        <div className='header'>
            <div className='header-title'>
            <h1>Louis Langlet</h1>
            <h3>Senior Game Designer</h3>
            </div>
            <div className='header-socials'>
                <a href="https://www.linkedin.com/in/langletlouis/" rel="noreferrer" target="_blank" aria-label="LinkedIn profile">
                <img className='linkedin' src={LinkedIn} alt='LinkedIn profile'/>
                </a>
                <a href ={process.env.PUBLIC_URL + '/Resume_LouisLanglet-compressed.pdf'} rel="noreferrer" target='_blank'>
                <img className='pdf' src={Pdf} alt='Download resume (PDF)'/>
                </a>
            </div>
        </div>
    )
}

export default Header;