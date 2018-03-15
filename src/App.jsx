import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Question from './containers/Question';
import combinedReducers from './reducers';

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

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
