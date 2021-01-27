import React from 'react';
import {Link, Route} from 'react-router-dom';
import Movie from './Movie';
const MovieList = props => {

  // console.log('movielist props ', props);
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <>
    // Link to take them to movie details when clicked
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
              Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
              Metascore: <strong>{metascore}</strong>
            </div>
          </div>

    </Link>
  
    <Route path={`/movie/${movie.id}`}>
      <Movie movie={movie}/>
    </Route>

   </>
  );
}

export default MovieList;
