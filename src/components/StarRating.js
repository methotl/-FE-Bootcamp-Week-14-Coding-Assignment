import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    //create rating and increment it based on index plus as index starts at 0, save the rating in a variable
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label>
                        <input 
                        type ="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)} 
                        />
                        <FaStar className ="star" color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} size={25} />
                    </label>
                    );
                })}
        </div>
    );
}

export default StarRating;