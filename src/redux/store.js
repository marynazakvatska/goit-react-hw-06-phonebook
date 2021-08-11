

import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phoneReducer from './reducer';
import {
  persistStore, persistReducer,
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';


 
const persistConfig = {
  key: 'persistedReducer',
  storage,
    blacklist: ['filter'],
}


const rootReducer = combineReducers({
    contacts: phoneReducer,
});

 const persistedReducer = persistReducer(persistConfig, rootReducer); 

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)

export default { store, persistor };





/* const rootReducer = combineReducers({
    contacts: phoneReducer,
});
 */
/* const store = createStore(rootReducer, composeWithDevTools()) */


