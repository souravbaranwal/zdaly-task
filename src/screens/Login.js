import React from 'react';
import {ImageBackground, StyleSheet, Image} from 'react-native';

import {Container, Typography, Input, Touchable} from '../components';
import {images} from '../assets/images/index';
import {theme} from '../theme/index';
export const Login = () => {
  return (
    <Container flex={1} bg="white" alignItems="center" pt={100}>
      <Image source={images.logo} />
      <Typography mt={48} mb={54} fontFamily="Poppins700" fontSize="big">
        Login
      </Typography>
      <Container px={55}>
        <Container
          borderBottomWidth={1}
          borderBottomColor="border"
          flexDirection="row"
          alignItems="center"
          pb={16}
          mb={28}>
          <Image source={images.emailIcon} />
          <Input
            color="black"
            placeholder="Email..."
            placeholderTextColor={theme.colors.secondary}
            keyboardType="email-address"
            // onChangeText={onChangeText}
            width="100%"
            fontFamily="Poppins700"
            fontSize="subTitle"
            ml={28}
          />
        </Container>
        <Container
          borderBottomWidth={1}
          borderBottomColor="border"
          flexDirection="row"
          alignItems="center"
          pb={16}
          mb={28}>
          <Image source={images.lockIcon} />
          <Input
            color="black"
            placeholder="Password..."
            placeholderTextColor={theme.colors.secondary}
            // onChangeText={onChangeText}
            width="100%"
            fontFamily="Poppins700"
            fontSize="subTitle"
            ml={28}
            secureTextEntry
          />
        </Container>
      </Container>
      <ImageBackground
        source={images.background}
        resizeMode="contain"
        style={styles.image}>
        <Touchable
          bg="red"
          flexDirection="row"
          alignItems="center"
          borderRadius={50}
          px={29}
          py={18}
          mb={23}>
          <Typography fontFamily="Poppins700" fontSize="subTitle" color="white">
            Login
          </Typography>
          <Image source={images.arrowRight} style={styles.arrowRight} />
        </Touchable>
        <Touchable>
          <Typography fontFamily="Poppins700" fontSize="subText">
            Forgot Password?
          </Typography>
        </Touchable>
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  arrowRight: {
    marginLeft: 8,
  },
});
