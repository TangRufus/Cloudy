import { connect } from 'react-redux/native';
import LoginFormContainer from '../containers/LoginFormContainer';
import React, {
  Component,
  PropTypes,
  View
} from 'react-native';

function mapStateToProps(state) {
  return { status: state.login.status };
}

class Login extends Component {
  static propTypes = {
    status: PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <LoginFormContainer />
      </View>
    );
  }
}

export default connect(mapStateToProps)(Login);
