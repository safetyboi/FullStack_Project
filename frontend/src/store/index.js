import {legacy_createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import CartItemReducer from './cartItemReducer';
import DonutReducer from './donutReducer';
import SessionReducer from './session';


export const rootReducer = combineReducers({
  session: SessionReducer,//{user: {}}
  donuts: DonutReducer,
  cartItems: CartItemReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = preloadedState => {
  return legacy_createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;