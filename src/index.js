import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Default object for feedbackReducer
const Feedback = {
  understanding: '',
  feeling: '',
  comments: '',
  supported: '',
  ''
};

// Reducer to handle all Feedback inputs
const feedback = (state = Feedback, action) => {
  switch (action.type) {
    case 'UPDATE_FEEDBACK':
      return { ...state, [action.payload]: action.payload };
    case 'FEEDBACK_ClEAR':
      return Feedback;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
