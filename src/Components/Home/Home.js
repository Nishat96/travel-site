import React from 'react';
import logo from '../../images/logoW.png';
import './Home.css';
import SearchIcon from '@material-ui/icons/Search';
import coxs from '../../images/Rect1.png';
import sreemongol from '../../images/Sreemongol.png';
import sundorban from '../../images/sundorbon.png';
import Card from '../Card/Card.js';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Home = () => {
    return (
      <div className="home">
        <header>
        <img class="logo" src={logo} alt=""/>
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
        <div className="card__section">
          <div className="place__info">
            <h1>COX'S BAZAR</h1>
            <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. 
              It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. 
              Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. </p>
           <Link to='/booking'><button className="bookingBtn">Booking -></button></Link> 
          </div>
                <Card
                    src={coxs}
                    title="COX'S BAZAR"
                />
                <Card
                    src={sreemongol}
                    title="SREEMANGAL"
                />
                <Card
                    src={sundorban}
                    title="SUNDARBANS"
                />
            </div>

      </div>
    );
};

export default Home;