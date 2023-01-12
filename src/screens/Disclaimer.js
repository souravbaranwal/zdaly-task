import React from 'react';
import {useDispatch} from 'react-redux';

import {images} from '../assets/images';
import {onboardUserAction} from '../redux/slices/auth';
import {Container, Header, Typography, Button} from '../components';

export const Disclaimer = () => {
  const dispatch = useDispatch();

  const handleOnboardUser = () => {
    dispatch(onboardUserAction({isOnboarded: true}));
  };
  return (
    <Container flex={1} bg="white">
      <Header logo={images.logo} />
      <Container
        alignItems="center"
        bg="white"
        width="100%"
        height="100%"
        px={34}
        pt={33}
        borderTopRightRadius={46}
        position="absolute"
        top={130}
        elevation={20}
        shadowOffset={{width: 0, height: 0}}
        shadowOpacity={0.15}
        shadowRadius={20}
        borderTopLeftRadius={46}>
        <Typography fontFamily="Poppins700" fontSize="big" mb={13}>
          Disclaimer
        </Typography>
        <Typography fontFamily="Poppins400" fontSize="body" mb={24}>
          The information provided by the Zdaly Fuel Network Optimizer app is
          based on historical data. Data on Zdaly Light is updated once daily at
          8:00 a.m. eastern time. Any prospective information is based on that
          data and should not be relied on as a estimation of future
          performance. Any future product prices are the manufacturer's
          suggested retail price (MSRP) only. Sites are independent operators
          free to set their retail price.
        </Typography>
        <Button onPress={handleOnboardUser} label="I Accept" px={86} />
      </Container>
    </Container>
  );
};
