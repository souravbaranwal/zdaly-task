import React from 'react';
import Icon from 'react-native-remix-icon';

import {Touchable} from './Touchable';

export const TouchableIcon = ({size, color, name, height, width, ...props}) => {
  return (
    <Touchable
      height={height || 24}
      width={width || 24}
      alignItems="center"
      justifyContent="center"
      activeOpacity={0.6}
      {...props}>
      <Icon size={size} color={color} name={name} />
    </Touchable>
  );
};
