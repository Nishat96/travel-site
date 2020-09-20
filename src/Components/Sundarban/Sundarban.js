import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoW.png';
import SearchIcon from '@material-ui/icons/Search';

const Sundarban = () => {
    return (
        <div className="booking__area">
            <header >
                <Link to='/home'>  <img class="logo" src={logo} alt=""/> </Link>
                    <div className="header__center">
                        <input placeholder="Search your Destination..." type="text"/>
                        <SearchIcon/>
                    </div>
                <nav> 
                    <Link className="navLink" to="/news">News</Link>
                    <Link className="navLink" to="/destination">Destination</Link>
                    <Link className="navLink" to="/blog">Blog</Link>
                    <Link className="navLink" to="/contact">Contact</Link>
                    <Link className="login" to="/signin">Login</Link>
                </nav>
            </header>
            <div className="booking__center">
                <div className="booking__info">
                    <h1>COX'S BAZAR</h1>
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. 
                    It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. 
                    Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts.</p>
                </div>
                    <div className="booking__date">
                        <h4>Origin</h4>
                        <input name="origin" type="text" placeholder="From" required/>
                        <h4>Destination</h4>
                        <input name="destination" type="text" placeholder="To" required/>
                        <div className="from__to">
                         <Link to="/searchresult">
                            <button type="submit" className="start__booking"> Start Booking</button> 
                        </Link>
                   </div>
                  
                   
            </div>
        </div>
            
        </div>
    );
};

export default Sundarban;