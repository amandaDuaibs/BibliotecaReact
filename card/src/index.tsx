import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/homePage/App';
import Store from './context/dataStore';


ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App/>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
)
