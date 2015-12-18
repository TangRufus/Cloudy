import React, {
  Component,
  StyleSheet
} from 'react-native';
import { Router, Route } from 'react-native-router-flux';
import Login from './Login';
import Launch from './Launch';
// @TODO: Remove before release
import Blank from './Blank';

const styles = StyleSheet.create({
  scene: {
    top: 64
  }
});

export default class App extends Component {
  // @TODO: Add schemas
  render() {
    return (
      <Router hideNavBar>
        <Route initial name="launch" component={Launch} title="Launch"/>
        <Route name="login">
          <Router sceneStyle={styles.scene}>
            <Route name="loginForm" component={Login} title="Login"/>
          </Router>
        </Route>

        <Route name="blank">
            <Router sceneStyle={styles.scene} hideNavBar>
              <Route name="blank1" component={Blank} title="Blank"/>
            </Router>
        </Route>
      </Router>
    );
  }
}
