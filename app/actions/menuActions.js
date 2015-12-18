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

export function onChange(isOpen) {
  return {
    type: menuTypes.ON_CHANGE,
    isOpen: isOpen
  };
}

export function toggle() {
  return {
    type: menuTypes.TOGGLE
  };
}
