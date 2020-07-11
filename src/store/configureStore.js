import { createStore, applyMiddleware, compose } from "redux";
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
  
    const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
    persistStore(store)
    return store;
}
