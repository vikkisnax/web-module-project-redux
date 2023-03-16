import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
  //uncomment and ^ read message. use the below instead \/
import { legacy_createStore as createStore } from 'redux'; 
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
