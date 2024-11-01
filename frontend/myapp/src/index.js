import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';  // Import the Router
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router> {/* Wrap your App with Router */}
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
