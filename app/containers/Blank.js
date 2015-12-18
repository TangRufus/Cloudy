import React, {
  Component,
  Text,
  StyleSheet,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from './Menu';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'white',
    padding: 20
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'red',
    borderRadius: 20
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    shadowRadius: 3,
    shadowOpacity: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

// @TODO: Remove before release
export default class Blank extends Component {
  closeControlPanel() {
    console.log('props: ', this.props);
    console.log('state: ', this.state);
    this.refs.drawer.close();
  }

  openControlPanel() {
    console.log('props: ', this.props);
    console.log('state: ', this.state);
    this.refs.drawer.open();
  }

  render() {
    console.log('refs', this.refs);
    return (
      <Drawer
        ref="drawer"
        type="static"
        acceptPan={false}
        tapToClose
        openDrawerOffset={100}
        styles={{ drawer: { backgroundColor: 'red' }, main: { shadowColor: '#000000', shadowOpacity: 0.4, shadowRadius: 3 } }}
        content={<Menu />}
        >

        <View style={styles.container}>
          <Text style={styles.welcome} onPress={this.openControlPanel.bind(this)}>
            open open open open open open open open open
          </Text>
          <Text style={styles.welcome} onPress={this.closeControlPanel.bind(this)}>
            close close close close close close close close
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
        </View>
      </Drawer>
    );
  }
}
