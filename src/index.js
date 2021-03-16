import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';


import logger from 'redux-logger';

// Default object for feedbackReducer
const feedback = {
  understanding: '',
  feeling: '',
  comments: '',
  supported: '',
  
};

// Reducer to handle all Feedback inputs
const feedbackReducer = (state = feedback, action) => {
  switch (action.type) {
    case 'UPDATE_FEEDBACK':
      return { ...state, [action.payload.property]: action.payload.value };
    case 'FEEDBACK_ClEAR':
      return feedback;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

