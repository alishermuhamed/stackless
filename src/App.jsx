import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {
  QuestionsList
  // Layout containing SideBar, SearchBar and FilterBar
  // Question,
  // User
} from './containers';
import combinedReducers from './reducers';

const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware));

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={QuestionsList} />
        {/* <Route path="/" component={SideBar} />
        <Route path="/search/q=:search" component={QuestionsList} />
        <Route path="/tag/:tag" component={QuestionsList} />
        <Route path="/:id" component={Question} />
        <Route path="/users/:id" component={User} /> */}
      </div>
    </Router>
  </Provider>
);

export default App;
