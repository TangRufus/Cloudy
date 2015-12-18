import React, {
  Component,
  PropTypes
} from 'react-native';
import { Router, Route } from 'react-native-router-flux';
import Launch from './Launch';
import Login from './Login';
import Blank from './Blank';

export default class AppRouter extends Component {
  static propTypes = {
    renderLeftButton: PropTypes.func.isRequired
  };

  // @TODO: Add schemas
  render() {
    const { renderLeftButton } = this.props;
    return (
      <Router hideNavBar>
          <Route initial name="launch" component={Launch} title="Launch" wrapRouter />
          <Route name="login">
            <Router>
              <Route name="loginForm" component={Login} title="Login" />
            </Router>
          </Route>

          <Route name="blank">
            <Router>
              <Route name="blank1" renderLeftButton={renderLeftButton} component={Blank} title="Blank" />
            </Router>
          </Route>
      </Router>
    );
  }
}
