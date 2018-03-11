import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Question, Questions, User } from './containers';
import { Background } from './layout';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Background} />
        <Route exact path="/" component={Questions} />
        <Route path="/search/q=:search" component={Questions} />
        <Route path="/questions/:id" component={Question} />
        <Route path="/users/:id" component={User} />
      </div>
    </Router>
  </Provider>
);

export default App;
