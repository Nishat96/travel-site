import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoW.png';
import SearchIcon from '@material-ui/icons/Search';

const SreeMongol = () => {
    return (
        <div className="booking__area" >
            <header >
                <Link to='/home'>  <img class="logo" src={logo} alt=""/></Link>
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
                    <h1>Sreemongol</h1>
                    <p>Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here.</p>
                </div>
                <div className="booking__date">
                    <h4>Origin</h4>
                    <input name="origin" type="text" placeholder="From" required/>
                    <h4>Destination</h4>
                    <input name="destination" type="text" placeholder="To" required/>
                    <div className="from__to">
                        <Link to="/searchresultsreemongol">
                            <button className="start__booking"> Start Booking</button> 
                        </Link>
                   </div>
                </div>
            </div>
       </div> 
    );
};

export default SreeMongol;