import React from 'react';
import {ImageBackground, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Touchable} from './Touchable';
import {Container} from './Container';
import {Typography} from './Typography';
import {images} from '../assets/images';

export const Header = ({canGoBack, logo, title}) => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={images.headerBackground}
      resizeMode="cover"
      style={[
        styles.background,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          justifyContent: canGoBack ? 'space-between' : 'center',
        },
      ]}>
      {canGoBack && (
        <Touchable
          mr={-16}
          onPress={navigation.goBack}
          hitSlop={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}>
          <Image source={images.arrowLeft} />
        </Touchable>
      )}
      {title && (
        <Typography fontFamily="Poppins700" fontSize="big">
          {title}
        </Typography>
      )}

      {logo && <Image source={logo} />}
      {canGoBack && <Container />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    paddingHorizontal: 32,
    paddingBottom: 80,
  },
});
