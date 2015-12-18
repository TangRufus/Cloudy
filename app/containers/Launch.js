import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux/native';
import { Actions } from 'react-native-router-flux';
import Button from 'apsl-react-native-button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

// @TODO: Add this loading scene
// @TODO: Overlay this loading scene
class Launch extends Component {
  goLogin() {
    Actions.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Launch page</Text>
        <Button onPress={Actions.blank}>Go to Blank page</Button>
        <Button onPress={this.goLogin}>Go to Login page</Button>
      </View>
    );
  }
}

export default connect(state => state)(Launch);
