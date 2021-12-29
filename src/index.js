import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={rootReducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  
  document.getElementById('root')
);