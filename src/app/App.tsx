import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Details from '../pages/Details';
import Home from '../pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
