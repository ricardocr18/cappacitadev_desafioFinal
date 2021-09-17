import React from 'react';
import './Header.css';

// menu da página
export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png' alt='Netflix' />
                </a>
            </div>
        </header>
    );
}