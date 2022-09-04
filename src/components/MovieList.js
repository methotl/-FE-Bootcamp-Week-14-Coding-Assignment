import React, { useState } from 'react';
import ReviewForm from './ReviewForm'


const MovieList = (props) => {
    return (
//pulled a movie, movie poster and synopsis and place the review form below it
        <div className="container">
            <h1>Avengers: Endgame</h1>
            <img src={"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"} alt="Avenger Movie Poster" />
            <p>Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.</p>
            <br></br>
            <ReviewForm/>
        </div>

    );
};

export default MovieList;