import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    ADD_MOVIE_SUCCESS,
    UPDATE_MOVIE_SUCCESS,
    DELETE_MOVIE_SUCCESS,
  } from '../../actions/movieActions';
  
  const initialState = {
    movies: [],
    loading: false,
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
          loading: false,
        };
      case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case ADD_MOVIE_SUCCESS:
        return {
          ...state,
          movies: [...state.movies, action.payload],
        };
      case UPDATE_MOVIE_SUCCESS:
        return {
          ...state,
          movies: state.movies.map((movie) =>
            movie._id === action.payload._id ? action.payload : movie
          ),
        };
      case DELETE_MOVIE_SUCCESS:
        return {
          ...state,
          movies: state.movies.filter((movie) => movie._id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  