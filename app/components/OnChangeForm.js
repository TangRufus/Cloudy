import React, {
  Component,
  PropTypes,
  View
 } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

export default class OnChangeForm extends Component {
  static propTypes = {
    formType: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired
  };

  render() {
    const { formType, onChange, options, value } = this.props;

    return (
      <View>
        <View>
          <Form
            ref="form"
            type={formType}
            options={options}
            value={value}
            onChange={onChange}
            />
        </View>
      </View>
    );
  }
}
