// src/redux/actions/actorActions.js

import axios from 'axios';

const baseUrl = 'https://io-factory-back-end.onrender.com/api/actors';

// Action Types
export const FETCH_ACTORS_REQUEST = 'FETCH_ACTORS_REQUEST';
export const FETCH_ACTORS_SUCCESS = 'FETCH_ACTORS_SUCCESS';
export const FETCH_ACTORS_FAILURE = 'FETCH_ACTORS_FAILURE';

export const ADD_ACTOR_REQUEST = 'ADD_ACTOR_REQUEST';
export const ADD_ACTOR_SUCCESS = 'ADD_ACTOR_SUCCESS';
export const ADD_ACTOR_FAILURE = 'ADD_ACTOR_FAILURE';

export const UPDATE_ACTOR_REQUEST = 'UPDATE_ACTOR_REQUEST';
export const UPDATE_ACTOR_SUCCESS = 'UPDATE_ACTOR_SUCCESS';
export const UPDATE_ACTOR_FAILURE = 'UPDATE_ACTOR_FAILURE';

export const DELETE_ACTOR_REQUEST = 'DELETE_ACTOR_REQUEST';
export const DELETE_ACTOR_SUCCESS = 'DELETE_ACTOR_SUCCESS';
export const DELETE_ACTOR_FAILURE = 'DELETE_ACTOR_FAILURE';

// Action Creators for fetching actors
export const fetchActors = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ACTORS_REQUEST });
    axios
      .get(baseUrl)
      .then((response) => {
        dispatch({
          type: FETCH_ACTORS_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ACTORS_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for adding an actor
export const addActor = (actorData) => {
  return (dispatch) => {
    dispatch({ type: ADD_ACTOR_REQUEST });
    axios
      .post(baseUrl, actorData)
      .then((response) => {
        dispatch({
          type: ADD_ACTOR_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_ACTOR_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for updating an actor
export const updateActor = (id, actorData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ACTOR_REQUEST });
    axios
      .put(`${baseUrl}/${id}`, actorData)
      .then((response) => {
        dispatch({
          type: UPDATE_ACTOR_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ACTOR_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for deleting an actor
export const deleteActor = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ACTOR_REQUEST });
    axios
      .delete(`${baseUrl}/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_ACTOR_SUCCESS,
          payload: id
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ACTOR_FAILURE,
          payload: error.message
        });
      });
  };
};
