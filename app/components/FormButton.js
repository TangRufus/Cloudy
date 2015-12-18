import React, {
  Component,
  PropTypes,
  StyleSheet,
  View
} from 'react-native';

import Button from 'apsl-react-native-button';

const styles = StyleSheet.create({
  signin: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    backgroundColor: '#FF3366',
    borderColor: '#FF3366'
  }
});

export default class FormButton extends Component {
  static propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
  };

  render() {
    const { isDisabled, isLoading, onPress, buttonText } = this.props;

    return (
      <View style={styles.signin}>
        <Button
          style={styles.button}
          isDisabled={isDisabled}
          isLoading={isLoading}
          onPress={onPress}
        >
          {buttonText}
        </Button>
      </View>
    );
  }
}
