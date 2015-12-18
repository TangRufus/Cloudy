import React, {
  Component,
  Text,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    shadowRadius: 3,
    shadowOpacity: 1
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

// @TODO: Remove before release
export default class Blank extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
        </View>
    );
  }
}
