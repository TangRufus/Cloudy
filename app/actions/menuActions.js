import menuTypes from '../constants/menuTypes';


export function open() {
  return {
    type: menuTypes.OPEN
  };
}

export function close() {
  return {
    type: menuTypes.CLOSE
  };
}
