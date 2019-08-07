import React from 'react';
import {Link} from "react-router";
import "./header.css"
import logo from '../../../assets/logo.png';

const Header = () => {
    return(
        <header className='header'>
            <div className='header-content'>
                <div className='logo'>
                    <Link to={'/'} className='link'><img className='logo-image' src={logo} alt="logo"/></Link>
                </div>
                <nav className='menu'>
                    <ul className='navigation'>
                        <li className='item'>
                            <Link to={'/'} className='link'>Home</Link>
                        </li>
                        <li className='item'>
                            <Link to={'/link'} className='link'>Link 1</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default  Header;