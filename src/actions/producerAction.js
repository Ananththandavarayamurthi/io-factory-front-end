// src/redux/actions/producerActions.js

import axios from 'axios';

const baseUrl = 'https://io-factory-back-end.onrender.com/api/producers';

// Action Types
export const FETCH_PRODUCERS_REQUEST = 'FETCH_PRODUCERS_REQUEST';
export const FETCH_PRODUCERS_SUCCESS = 'FETCH_PRODUCERS_SUCCESS';
export const FETCH_PRODUCERS_FAILURE = 'FETCH_PRODUCERS_FAILURE';

export const ADD_PRODUCER_REQUEST = 'ADD_PRODUCER_REQUEST';
export const ADD_PRODUCER_SUCCESS = 'ADD_PRODUCER_SUCCESS';
export const ADD_PRODUCER_FAILURE = 'ADD_PRODUCER_FAILURE';

export const UPDATE_PRODUCER_REQUEST = 'UPDATE_PRODUCER_REQUEST';
export const UPDATE_PRODUCER_SUCCESS = 'UPDATE_PRODUCER_SUCCESS';
export const UPDATE_PRODUCER_FAILURE = 'UPDATE_PRODUCER_FAILURE';

export const DELETE_PRODUCER_REQUEST = 'DELETE_PRODUCER_REQUEST';
export const DELETE_PRODUCER_SUCCESS = 'DELETE_PRODUCER_SUCCESS';
export const DELETE_PRODUCER_FAILURE = 'DELETE_PRODUCER_FAILURE';

// Action Creators for fetching producers
export const fetchProducers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCERS_REQUEST });
    axios
      .get(baseUrl)
      .then((response) => {
        dispatch({
          type: FETCH_PRODUCERS_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCERS_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for adding a producer
export const addProducer = (producerData) => {
  return (dispatch) => {
    dispatch({ type: ADD_PRODUCER_REQUEST });
    axios
      .post(baseUrl, producerData)
      .then((response) => {
        dispatch({
          type: ADD_PRODUCER_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCER_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for updating a producer
export const updateProducer = (id, producerData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_PRODUCER_REQUEST });
    axios
      .put(`${baseUrl}/${id}`, producerData)
      .then((response) => {
        dispatch({
          type: UPDATE_PRODUCER_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRODUCER_FAILURE,
          payload: error.message
        });
      });
  };
};

// Action Creators for deleting a producer
export const deleteProducer = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_PRODUCER_REQUEST });
    axios
      .delete(`${baseUrl}/${id}`)
      .then(() => {
        dispatch({
          type: DELETE_PRODUCER_SUCCESS,
          payload: id
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCER_FAILURE,
          payload: error.message
        });
      });
  };
};
