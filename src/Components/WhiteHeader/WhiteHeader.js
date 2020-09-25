import React from 'react';
import logo from '../../images/Logo.png';
import './WhiteHeader.css';
import { Link } from 'react-router-dom';

const WhiteHeader = () => {
    return (
        <div>
            <header>
               <Link to='/home'><img className="logoBlack" src={logo} alt=""/></Link>  
                <nav> 
                    <Link to="/news">News</Link>
                    <Link to="/destination">Destination</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link className="login" to="/signin">Login</Link>
                </nav>
            </header>
        </div>
    );
};

export default WhiteHeader;