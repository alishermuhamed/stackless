import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Question from './containers/Question';
import combinedReducers from './reducers';

const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware));

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" />
        <Route path="/question/:id" component={Question} />
      </div>
    </Router>
  </Provider>
);

export default App;
