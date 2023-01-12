import React from 'react';

import {Container, Header, Typography, Button} from '../components';
import {images} from '../assets/images';

export const Disclaimer = () => {
  return (
    <Container flex={1} bg="white">
      <Header logo={images.logo} />
      <Container
        alignItems="center"
        bg="white"
        px={34}
        pt={33}
        borderTopRightRadius={46}
        position="absolute"
        top={130}
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
        <Button onPress={() => {}} label="I Accept" px={86} />
      </Container>
    </Container>
  );
};
