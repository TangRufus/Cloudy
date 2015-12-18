import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import _ from 'lodash';
import React, {
  Component,
  PropTypes,
  View
} from 'react-native';
import t from 'tcomb-form-native';
import * as loginActions from '../actions/loginActions';
import OnChangeForm from '../components/OnChangeForm';
import FormButton from '../components/FormButton';
import ErrorAlert from '../components/ErrorAlert';

function mapStateToProps(state) {
  return { form: state.login.form,
           isFetching: state.login.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginActions, dispatch);
}

const formType = t.struct({
  email: t.String,
  apiKey: t.String
});

export default class LoginFormContainer extends Component {
  static propTypes = {
    form: PropTypes.shape({
      error: PropTypes.object,
      fields: PropTypes.shape({
        email: PropTypes.string.isRequired,
        emailHasError: PropTypes.bool.isRequired,
        apiKey: PropTypes.string.isRequired,
        apiKeyHasError: PropTypes.bool.isRequired
      }).isRequired,
      isValid: PropTypes.bool.isRequired
    }).isRequired,
    isFetching: PropTypes.bool.isRequired,
    onFormFieldChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.errorAlert = new ErrorAlert();
  }

  onChange(value) {
    if (!_.isUndefined(value.email)) {
      this.props.onFormFieldChange('email', value.email);
    }
    if (!_.isUndefined(value.apiKey)) {
      this.props.onFormFieldChange('apiKey', value.apiKey);
    }
  }

  onSubmit() {
    this.props.onFormSubmit();
  }

  render() {
    const isFormEditable = !this.props.isFetching;
    const isButtonDisabled = !this.props.form.isValid || this.props.isFetching;
    const isButtonLoading = this.props.isFetching;
    const { error } = this.props.form;
    const value = this.props.form.fields;
    const options = {
      auto: 'placeholders',
      fields: {
        email: {
          label: 'Email',
          keyboardType: 'email-address',
          editable: isFormEditable,
          hasError: value.emailHasError,
          error: 'Please enter valid email',
          autoFocus: true,
          autoCapitalize: 'none',
          clearButtonMode: 'always',
          selectTextOnFocus: true
        },
        apiKey: {
          label: 'API Key',
          editable: isFormEditable,
          hasError: value.apiKeyHasError,
          error: 'Api Key doesn\'t not valid',
          autoCapitalize: 'none',
          autoCorrect: false,
          clearButtonMode: 'always',
          selectTextOnFocus: true
        }
      }
    };
    const buttonText = 'Login';

    this.errorAlert.checkError(error);

    // @TODO: Show spiner in status bar if fetching

    return (
      <View>
        <OnChangeForm
          error={error}
          formType={formType}
          options={options}
          value={value}
          onChange={this.onChange.bind(this)}
          />
        <FormButton
          isDisabled={isButtonDisabled}
          isLoading={isButtonLoading}
          onPress={this.onSubmit.bind(this)}
          buttonText={buttonText}/>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
