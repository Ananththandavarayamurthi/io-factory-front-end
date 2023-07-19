// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import movieReducer from '../moviereducers';
import actorReducer from '../actorreducer';
import producerReducer from '../producersreducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  actors: actorReducer,
  producers: producerReducer,
});

export default rootReducer;
