import { connect } from 'react-redux/native';
import LoginFormContainer from '../containers/LoginFormContainer';
import React, {
  Component,
  PropTypes
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
      <LoginFormContainer />
    );
  }
}

export default connect(mapStateToProps)(Login);
