import React from 'react';
import {Image} from 'react-native';

import {images} from '../assets/images';
import {Container, Header, Typography, Button, Touchable} from '../components';

export const Details = () => {
  return (
    <Container flex={1} bg="white">
      <Header title="Details" canGoBack />
      <Container
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
        <Typography fontFamily="Poppins700" fontSize="big" mb={15}>
          Station Subscribed
        </Typography>
        <Container
          bg="white"
          flexDirection="row"
          alignItems="center"
          p={24}
          elevation={20}
          shadowOffset={{width: 0, height: 0}}
          shadowOpacity={0.08}
          shadowRadius={20}
          borderRadius={16}>
          <Container flex={1}>
            <Typography fontFamily="Poppins700" fontSize="big">
              Active From
            </Typography>
            <Container flexDirection="row" alignItems="flex-start">
              <Typography fontFamily="Poppins700" fontSize="superHuge" mr={1}>
                9
              </Typography>
              <Typography
                fontFamily="Poppins600"
                fontSize="small"
                lineHeight={32}>
                Seconds
              </Typography>
            </Container>
            <Container flexDirection="row" alignItems="center">
              <Typography fontFamily="Poppins600" fontSize="extraSmall" mr={11}>
                MORE INFO
              </Typography>
              <Touchable activeOpacity={0.6}>
                <Image source={images.downIcon} />
              </Touchable>
            </Container>
          </Container>
          <Container>
            <Button
              onPress={() => {}}
              label="Stop"
              labelProps={{
                fontSize: 'subText',
                fontFamily: 'Poppins600',
              }}
              py={1}
              px={32}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
