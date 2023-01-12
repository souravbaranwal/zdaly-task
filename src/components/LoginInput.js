import React from 'react';
import {Image} from 'react-native';

import {Input} from './Input';
import {Container} from './Container';
import {theme} from '../theme';
import {Typography} from './Typography';

export const LoginInput = ({
  value = '',
  placeholder,
  onChangeText = () => {},
  onBlur = () => {},
  disabled = false,
  isPassword = false,
  errorMessage = null,
  keyboardType,
  leftIcon,
  ...rest
}) => {
  return (
    <>
      <Container
        borderBottomWidth={1}
        borderBottomColor={errorMessage ? 'red' : 'border'}
        flexDirection="row"
        alignItems="center"
        pb={16}
        {...rest}>
        <Image source={leftIcon} />
        <Input
          color="black"
          placeholder={placeholder}
          placeholderTextColor={theme.colors.secondary}
          disabled={disabled}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={isPassword}
          width="100%"
          fontFamily="Poppins700"
          fontSize="subTitle"
          ml={28}
          {...rest.inputProps}
        />
      </Container>
      <Typography color="red" fontSize="small" mt={1} mb={10}>
        {errorMessage}
      </Typography>
    </>
  );
};
