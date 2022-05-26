import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {compose, createStore} from 'redux';
import {rootReducer} from './store/reducers/rootReducer';
import {Provider} from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, compose(
  composeEnhancers()));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
