import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Provider from 'providers';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
