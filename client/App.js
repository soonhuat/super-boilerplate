/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { CookiesProvider } from 'react-cookie'

const history = createBrowserHistory();

// Import Routes
import Routes from './routes'

// Base stylesheet

const App = (props) => {
  return (
    <Provider store={props.store}>
      <CookiesProvider>
        <Router>
          <Routes />
        </Router>
      </CookiesProvider>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default App
