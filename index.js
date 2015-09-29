import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import Store from './store/configureStore';

React.render(
  <Provider store={Store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
