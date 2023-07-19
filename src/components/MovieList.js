import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {deleteMovie} from '../actions/movieActions';
import { fetchMovies } from '../actions/movieActions';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css"



const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  console.log(movies)
 
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }
  const handleDeleteMovie = (movieId) => {
    dispatch(deleteMovie(movieId));
  };

  return (
    <div>
        
      <h2>Movie List</h2>
      <div className='main-container'>
        {movies&&movies.map((movie) => (
          <Card sx={{ maxWidth: 345 }}> 
          <CardMedia
            component="img"
            height="194"
            image={movie.poster}
            alt={movie.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <h2>{movie.name}</h2>
              <h3>produced by{movie.producer.name}</h3>
              <h3>actor {movie.actors.map(actor => actor.name).join(", ")}</h3>
              <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteMovie(movie._id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
            
              <h4>{movie.plot}</h4>
            </Typography>
          </CardContent>
          
          
        </Card>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
