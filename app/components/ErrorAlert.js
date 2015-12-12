/**
* # ErrorAlert.js
*
* This class uses a component which displays the appropriate alert
* depending on the platform
*
* The main purpose here is to determine if there is an error and then
* plucking off the message depending on the shape of the error object.
*/
'use strict';

import { AlertIOS } from 'react-native';
import _ from 'lodash';

export default class ErrorAlert {
  deepestError(obj) {
    if (_.isUndefined(obj.error)) {
      return obj;
    }
    return this.deepestError(obj.error);
  }

  checkError(obj) {
    // Early quit if no error
    if (_.isUndefined(obj) || _.isNull(obj)) {
      return;
    }

    const deepestError = this.deepestError(obj);
    // @TODO: Ensure deepestError is a AlertableError

    AlertIOS.alert(deepestError.title, deepestError.message, [{ 'text': deepestError.buttonText }]);
  }
}
