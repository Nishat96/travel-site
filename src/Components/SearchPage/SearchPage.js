import React from 'react';
import './SearchPage.css';
import {FaStar} from 'react-icons/fa'; 

const SearchPage = ({
    img,
    title,
    description,
    condition,
    flexibility,
    star,
    price,
    total,
}) => {
    return (
        <div className="search__page">
            <div className="hotel_img">
                <img src={img} alt=""/>
            </div>
           
            <div className="search__pageInfo">
                <p className="title"> {title} </p>
                <p className="gray__color"> {description}</p>
                <p className="gray__color">{condition}</p>
                <p className="gray__color">{flexibility}</p>
                <div className="search__pageInfoBottom">
                    <div >
                        <p> <FaStar className="starClass"/> <strong>{star} </strong> (20)</p>
                    </div>
                    <div>
                        <p>{price} {total} </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SearchPage;