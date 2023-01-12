import React from 'react';
import {StyleSheet, Image, ActivityIndicator} from 'react-native';

import {Touchable} from './Touchable';
import {Typography} from './Typography';
import {images} from '../assets/images';
import {theme} from '../theme';

export const Button = ({
  label,
  onPress,
  rightIcon,
  isLoading = false,
  ...rest
}) => {
  return (
    <Touchable
      bg="red"
      flexDirection="row"
      alignItems="center"
      borderRadius={50}
      onPress={onPress}
      px={29}
      py={18}
      mb={23}
      activeOpacity={0.6}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.white} size="small" />
      ) : (
        <>
          <Typography
            fontFamily="Poppins700"
            fontSize="subTitle"
            color="white"
            {...rest.labelProps}>
            {label}
          </Typography>
          {rightIcon && (
            <Image source={images.arrowRight} style={styles.arrowRight} />
          )}
        </>
      )}
    </Touchable>
  );
};

const styles = StyleSheet.create({
  arrowRight: {
    marginLeft: 8,
  },
});
