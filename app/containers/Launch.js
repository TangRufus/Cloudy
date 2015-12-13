import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

export default class Launch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Launch page</Text>
        <Button onPress={Actions.blank}>Go to Blank page</Button>
        <Button onPress={Actions.login}>Go to Login page</Button>
      </View>
    );
  }
}
