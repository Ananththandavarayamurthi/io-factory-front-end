// src/redux/reducers/actorReducer.js

import {
    FETCH_ACTORS_REQUEST,
    FETCH_ACTORS_SUCCESS,
    FETCH_ACTORS_FAILURE,
    ADD_ACTOR_SUCCESS,
    UPDATE_ACTOR_SUCCESS,
    DELETE_ACTOR_SUCCESS,
  } from '../../actions/actors.js';
  
  const initialState = {
    actors: [],
    loading: false,
    error: null,
  };
  
  const actorReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ACTORS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ACTORS_SUCCESS:
        return {
          ...state,
          actors: action.payload,
          loading: false,
        };
      case FETCH_ACTORS_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case ADD_ACTOR_SUCCESS:
        return {
          ...state,
          actors: [...state.actors, action.payload],
        };
      case UPDATE_ACTOR_SUCCESS:
        return {
          ...state,
          actors: state.actors.map((actor) =>
            actor._id === action.payload._id ? action.payload : actor
          ),
        };
      case DELETE_ACTOR_SUCCESS:
        return {
          ...state,
          actors: state.actors.filter((actor) => actor._id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default actorReducer;
  