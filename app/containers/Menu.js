import _ from 'lodash';
import React, {
  Component,
  PropTypes,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux/native';


function mapStateToProps(state) {
  return { zones: state.zones };
}

class Menu extends Component {
  static propTypes = {
    zones: PropTypes.oneOfType([
      React.PropTypes.array.isRequired,
      React.PropTypes.object.isRequired
    ]).isRequired
  };

  // @TODO: Render list view instead
  render() {
    return (
      <View>
        { _.map(this.props.zones, (zone) => { return <Text>{zone.name}</Text>; }) }
      </View>
    );
  }
}

export default connect(mapStateToProps)(Menu);
