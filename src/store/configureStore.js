import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router/immutable';
import { fromJS } from 'immutable';
import history from "./history";
import appReducer from "../reducers";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
    key: 'root',
    storage,
}
 
  
const rootReducer = (state, action) => {
//   if (action.type === "GLOBAL_RESET_STATE_SUCCESS") {
//     state = undefined;
//   }

  return appReducer(state, action);
};


export default function configureStore(initialState) {
    
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const middlewares = [thunk, routerMiddleware(history)];

    const enhancers = [applyMiddleware(...middlewares)];
  
    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle, indent */
    const composeEnhancers = process.env.NODE_ENV !== 'production'
      && typeof window === 'object'
      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Prevent recomputing reducers for `replaceReducer`
            shouldHotReload: false,
          })
        : compose;
    const store = createStore(persistedReducer, 
      fromJS(initialState),
      composeEnhancers(...enhancers),
    );
    persistStore(store)
    return store;
}
