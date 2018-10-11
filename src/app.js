import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './components/App';
import Timer from './components/Timer';

// IMPORTANT! Remove these default references if you remove them from your Index
// Otherwise React will not pickup the DOM elements 'app' and 'timer'
ReactDOM.render(<App />, document.getElementById('app')) 
ReactDOM.render(<Timer />, document.getElementById('timer'))