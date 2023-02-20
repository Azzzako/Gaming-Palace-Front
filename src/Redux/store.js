import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
