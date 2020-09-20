import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../images/logoW.png';
import './BookingDetails.css';
import { Button } from '@material-ui/core';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';


const BookingDetails = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="booking__area" >
            
                <header >
                    <img class="logo" src={logo} alt=""/>
                    <div className="header__center">
                        <input placeholder="Search your Destination..." type="text"/>
                        <SearchIcon/>
                    </div>
                <nav> 
                    <Link to="/news">News</Link>
                    <Link to="/destination">Destination</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link className="login" to="/signin">Login</Link>
                </nav>
            </header>
            <div className="booking__center">
          <div className="booking__info">
              <h2>COX'S BAZAR</h2>
              <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. 
              It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. 
              Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts.</p>
          </div>
            <div className="booking__date">
                <h4>Origin</h4>
                <input name="origin" type="text" placeholder="From"/>
                <h4>Destination</h4>
                <input name="destination" type="text" placeholder="To"/>
                <div className="from__to">
                    {showSearch && <Search/>}
                    <Button onClick = {()=>
                        setShowSearch(!showSearch)
                    }
                        className="searchButton"
                        variant="outlined"> 
                        {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>

            </div>
            </div>
        </div>
    );
};

export default BookingDetails;