import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';

export const HideKeyboard = props => (
  <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}>
    {props.children}
  </TouchableWithoutFeedback>
);

HideKeyboard.propTypes = {
  children: PropTypes.element,
};
