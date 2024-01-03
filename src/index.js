import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import ReactRouter from './ReactRouter';
import {BrowserRouter as Router} from 'react-router-dom'
import Three from './Three';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
    <ReactRouter/>
    <Three/>
    </Router>
    
  </React.StrictMode>
);



