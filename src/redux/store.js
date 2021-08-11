
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from './reducer';
import {
  persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


 
const persistConfig = {
  key: 'root',
  storage,
}


const rootReducer = combineReducers({
    contacts: phoneReducer,
});




const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer:  persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)

export default { store, persistor };






/* const rootReducer = combineReducers({
    contacts: phoneReducer,
});
 */
/* const store = createStore(rootReducer, composeWithDevTools()) */


