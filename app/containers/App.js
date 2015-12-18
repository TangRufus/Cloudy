import React, {
  Component,
  PropTypes
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as menuActions from '../actions/menuActions';
import Icon from 'react-native-vector-icons/FontAwesome';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import AppRouter from './AppRouter';


function mapStateToProps(state) {
  return { menu: state.menu };
}

function mapDispatchToProps(dispatch) {
  return { menuActions: bindActionCreators(menuActions, dispatch) };
}

export default class App extends Component {
  static propTypes = {
    menu: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired
    }).isRequired,
    menuActions: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      toggle: PropTypes.func.isRequired
    }).isRequired
  };

  renderLeftButton() {
    const { toggle } = this.props.menuActions;
    return (
      <Icon.Button
        name="align-justify"
        backgroundColor="transparent"
        iconStyle={{ marginRight: 0, borderWidth: 0 }}
        borderRadius={0}
        size={35}
        color="white"
        onPress={toggle}
      />
    );
  }

  // @TODO: Add schemas
  render() {
    const { isOpen } = this.props.menu;
    const { onChange } = this.props.menuActions;

    return (
      <SideMenu
        menu={<Menu />}
        isOpen={isOpen}
        onChange={onChange}
        disableGestures
        touchToClose
      >

        <AppRouter renderLeftButton={this.renderLeftButton.bind(this)}/>

      </SideMenu>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
