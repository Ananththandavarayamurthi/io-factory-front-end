import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from '../components/reducers/movieReducer';
import actorReducer from '../components/reducers/actorReducer';
import producerReducer from '../components/reducers/producerReducer';

// Combine reducers
const rootReducer = combineReducers({
  movies: movieReducer,
  actors: actorReducer,
  producers: producerReducer,
});

// Enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with the rootReducer and middleware
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
