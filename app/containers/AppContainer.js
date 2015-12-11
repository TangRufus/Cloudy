import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import configureStore from '../store/configureStore';
import App from './App';

const store = configureStore();

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}
