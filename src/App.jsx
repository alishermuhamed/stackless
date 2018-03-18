import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Question, Questions, User } from './containers';
import { Background } from './layout';
import { Tag } from './components';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Background} />
        <Route exact path="/" component={Questions} />
        <Route path="/questions/:id" component={Question} />
        <Route path="/users/:id" component={User} />
        Route path="/tags/:tag" component={Tag} />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default App;
