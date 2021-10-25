import React from 'react';
import './App.css';
import {getCorona} from './openapi';

function App() {
  getCorona();
  return <div>hi</div>;
}

export default App;
