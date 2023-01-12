import React from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {ImageBackground, StyleSheet, Image} from 'react-native';

import {
  Container,
  Typography,
  Touchable,
  HideKeyboard,
  LoginInput,
  Button,
} from '../components';
import {images} from '../assets/images/index';
import {useAuthentication} from '../hooks/query/useAuthentication';

export const Login = () => {
  const {useLogin} = useAuthentication();
  const {mutate: loginUser, isLoading} = useLogin();

  const handleLogin = values => {
    loginUser(values);
  };

  const {handleChange, handleSubmit, handleBlur, errors, values, touched} =
    useFormik({
      validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().required('Required'),
      }),
      validateOnBlur: true,
      validateOnMount: false,
      initialValues: {email: '', password: ''},
      onSubmit: handleLogin,
    });

  return (
    <HideKeyboard>
      <Container flex={1} bg="white" alignItems="center" pt={100}>
        <Image source={images.logo} />
        <Typography mt={48} mb={54} fontFamily="Poppins700" fontSize="big">
          Login
        </Typography>
        <Container px={55} mb={24}>
          <LoginInput
            placeholder="Email..."
            leftIcon={images.emailIcon}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            errorMessage={touched?.email && errors.email}
            inputProps={{
              keyboardType: 'email-address',
              autoCapitalize: 'none',
            }}
          />
          <LoginInput
            placeholder="Password..."
            isPassword
            leftIcon={images.lockIcon}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            errorMessage={touched?.password && errors.password}
            inputProps={{
              autoCapitalize: 'none',
            }}
          />
        </Container>
        <ImageBackground
          source={images.background}
          resizeMode="cover"
          style={styles.image}>
          <Container flex={1} alignItems="center">
            <Button
              onPress={handleSubmit}
              label="Login"
              rightIcon={images.arrowRight}
              isLoading={isLoading}
            />
            <Touchable activeOpacity={0.6}>
              <Typography fontFamily="Poppins700" fontSize="subText">
                Forgot Password?
              </Typography>
            </Touchable>
          </Container>
        </ImageBackground>
      </Container>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  arrowRight: {
    marginLeft: 8,
  },
});
