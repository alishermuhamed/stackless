import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Question, Questions, User } from './containers';
import { Background } from './layout';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Background} />
        <Route exact path="/" component={Questions} />
        <Route path="/search/:search" component={Questions} />
        <Route path="/tags/:tag" component={Questions} />
        <Route path="/questions/:id" component={Question} />
        <Route path="/users/:id" component={User} />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default App;
