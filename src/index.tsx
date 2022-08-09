import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (process.env.REACT_APP_NODE_ENV === 'development') {
  const {worker} = require('./mocks/browser');
  worker.start();
}
ReactDOM.render(<App />, document.getElementById('root'));
