import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {
  NavigationBar,
  Question,
  QuestionsList,
  UserProfile
} from './containers';
import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={QuestionsList} />
        <Route path="/search/q=:search" component={QuestionsList} />
        <Route path="/questions/:id" component={Question} />
        <Route path="/users/:id" component={UserProfile} />
      </div>
    </Router>
  </Provider>
);

export default App;
