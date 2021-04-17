import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import catsReducer from './reducers/catsReducer';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(catsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
