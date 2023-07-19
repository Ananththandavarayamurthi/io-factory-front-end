// src/redux/actions/movieActions.js

import axios from 'axios';

const apiBaseUrl = 'https://io-factory-back-end.onrender.com/api';

// Action Types
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const ADD_MOVIE_REQUEST = 'ADD_MOVIE_REQUEST';
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
export const ADD_MOVIE_FAILURE = 'ADD_MOVIE_FAILURE';

export const UPDATE_MOVIE_REQUEST = 'UPDATE_MOVIE_REQUEST';
export const UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS';
export const UPDATE_MOVIE_FAILURE = 'UPDATE_MOVIE_FAILURE';

export const DELETE_MOVIE_REQUEST = 'DELETE_MOVIE_REQUEST';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';

// Action Creators for fetching movies
export const fetchMovies = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    axios
      .get(`${apiBaseUrl}/movies`)
      .then((response) => {
        
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for adding a movie
export const addMovie = (movieData) => {
  return (dispatch) => {
    dispatch({ type: ADD_MOVIE_REQUEST });
    axios
      .post(`${apiBaseUrl}/movies`, movieData)
      .then((response) => {
        dispatch({
          type: ADD_MOVIE_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_MOVIE_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for updating a movie
export const updateMovie = (id, movieData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_MOVIE_REQUEST });
    axios
      .put(`${apiBaseUrl}/movies/${id}`, movieData)
      .then((response) => {
        dispatch({
          type: UPDATE_MOVIE_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_MOVIE_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for deleting a movie
export const deleteMovie = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_MOVIE_REQUEST });
    axios
      .delete(`${apiBaseUrl}/movies/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_MOVIE_SUCCESS,
          payload: id
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_MOVIE_FAILURE,
          payload: error.message
        });
      });
  };
};
