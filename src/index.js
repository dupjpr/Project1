import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import mainReducer from './Redux/reducer/mainReducer.js'
import thunk from 'redux-thunk';

const store = createStore(
  mainReducer,
  { name: 'pakman' },
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


