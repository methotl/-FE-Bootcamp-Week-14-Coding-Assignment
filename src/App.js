import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieList from './components/MovieList';


const App = () => {
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
        		<MovieList/>
			</div>
		</div>
	);
};

export default App;