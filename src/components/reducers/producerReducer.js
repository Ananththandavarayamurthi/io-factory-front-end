// src/redux/reducers/producerReducer.js

import {
    FETCH_PRODUCERS_REQUEST,
    FETCH_PRODUCERS_SUCCESS,
    FETCH_PRODUCERS_FAILURE,
    ADD_PRODUCER_SUCCESS,
    UPDATE_PRODUCER_SUCCESS,
    DELETE_PRODUCER_SUCCESS,
  } from '../../actions/producerAction';
  
  const initialState = {
    producers: [],
    loading: false,
    error: null,
  };
  
  const producerReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCERS_SUCCESS:
        return {
          ...state,
          producers: action.payload,
          loading: false,
        };
      case FETCH_PRODUCERS_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case ADD_PRODUCER_SUCCESS:
        return {
          ...state,
          producers: [...state.producers, action.payload],
        };
      case UPDATE_PRODUCER_SUCCESS:
        return {
          ...state,
          producers: state.producers.map((producer) =>
            producer._id === action.payload._id ? action.payload : producer
          ),
        };
      case DELETE_PRODUCER_SUCCESS:
        return {
          ...state,
          producers: state.producers.filter((producer) => producer._id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default producerReducer;
  