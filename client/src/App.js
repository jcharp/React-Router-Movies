import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route } from 'react';

import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // console.log('this is response ', response);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
        <Link to="/">Movie List</Link>
        <Link to="/movie/:id">Movie</Link>

        <Route path="/" component={MovieList}/>



      {/* <Route path="/Movie/:id">
        <Movie movie={movieList}/>

      </Route> */}
      {/* <Route path="/">
        <MovieList />
      </Route> */}
      
      


    </div>
  );
};

export default App;
