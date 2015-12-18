import React, {
  Component,
  Text,
  PropTypes,
  StyleSheet,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as menuActions from '../actions/menuActions';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

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

function mapStateToProps(state) {
  return { isOpen: state.menu.isOpen };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(menuActions, dispatch);
}

// @TODO: Remove before release
class Blank extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    open: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <SideMenu
        menu={<Menu />}
        isOpen={this.props.isOpen}
        onChange={(e) => { this.props.onChange(e); }}
        disableGestures
        touchToClose
        >

        <View style={styles.container}>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
        </View>
      </SideMenu>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank);
