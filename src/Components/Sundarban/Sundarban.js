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
                    <h1>SUNDARBANS</h1>
                    <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.
                    Despite a total ban on all killing or capture of wildlife other than fish and some invertebrates, it appears that there is a consistent pattern of depleted biodiversity or loss of species in the 20th century, and that the ecological quality of the forest is declining. 
                    </p>
                </div>
                <div className="booking__date">
                    <h4>Origin</h4>
                    <input name="origin" type="text" placeholder="From" required/>
                    <h4>Destination</h4>
                    <input name="destination" type="text" placeholder="To" required/>
                    <div className="from__to">
                        <Link to="/searchresultsundarban">
                            <button type="submit" className="start__booking"> Start Booking</button> 
                        </Link>
                    </div>
                </div>
            </div>
       </div> 
    );
};

export default Sundarban;