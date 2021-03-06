import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import SearchPage from '../SearchPage/SearchPage';
import coxs1 from '../../images/coxs1.png';
import coxs2 from '../../images/coxs2.png';
import coxs3 from '../../images/coxs3.png';
import './SearchResult.css';
import GoogleMap from '../GoogleMap/GoogleMap';

const SearchResult = ({displayName}) => {
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
            <div className="search__info">
                <div className="top">
                        <p>252 stays . Apr 13-17 . 3 guests</p>
                        <h1> Stay in Cox's Bazar</h1>
                </div>
                <div className="hotel-section">
                    <div>
                        <SearchPage
                            img = {coxs1}
                            title = "Light bright airy stylish apt & safe peachful stay"
                            description = "4 guest . 2 bedrooms . 2 beds . 2 baths"
                            condition = "Wif Air Conditioning Kitchen"
                            flexibility = "Cancellation flexibility available"
                            star = {4.9}
                            price = "$34/night"
                            total = "$167 total"
                        />
                        <SearchPage
                            img = {coxs2}
                            title = "Apartment in Lost Panorama"
                            description = "4 guest . 2 bedrooms . 2 beds . 2 baths"
                            condition = "Wif Air Conditioning Kitchen"
                            flexibility = "Cancellation flexibility available"
                            star = {4.8}
                            price = "$52/night"
                            total = "$167 total"
                        />
                        <SearchPage
                            img = {coxs3}
                            title = "AR Lounge & Pool(r&r + b&b)"
                            description = "4 guest . 2 bedrooms . 2 beds . 2 baths"
                            condition = "Wif Air Conditioning Kitchen"
                            flexibility = "Cancellation flexibility available"
                            star = {4.9}
                            price = "$44/night"
                            total = "$167 total"
                        />
                    </div>
                    <div className="related-map">
                        <GoogleMap></GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;

