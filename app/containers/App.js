import React, {
  Component,
  PropTypes,
  Text
} from 'react-native';
import { Router, Route } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as menuActions from '../actions/menuActions';
import Login from './Login';
import Launch from './Launch';
// @TODO: Remove before release
import Blank from './Blank';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(menuActions, dispatch);
}

export default class App extends Component {
  static propTypes = {
    toggle: PropTypes.func.isRequired
  };

  renderLeftButton() {
    return (
      <Text onPress={this.props.toggle}>hihihihi ihihi hihih</Text>
    );
  }

  // @TODO: Add schemas
  render() {
    return (
      <Router hideNavBar>
        <Route initial name="launch" component={Launch} title="Launch"/>
        <Route name="login">
          <Router>
            <Route name="loginForm" component={Login} title="Login"/>
          </Router>
        </Route>

        <Route name="blank">
            <Router>
              <Route name="blank1" renderLeftButton={this.renderLeftButton.bind(this)} component={Blank} title="Blank"/>
            </Router>
        </Route>
      </Router>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(App);
