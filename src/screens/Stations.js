import React, {useState} from 'react';
import {Image} from 'react-native';

import {
  Container,
  Header,
  HideKeyboard,
  Input,
  Typography,
  Touchable,
} from '../components';
import {theme} from '../theme';
import {images} from '../assets/images';

export const Stations = () => {
  const [searchString, setSearchString] = useState('');

  return (
    <HideKeyboard>
      <Container bg="white" flex={1}>
        <Header title="Select Station" />
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
          <Container
            flexDirection="row"
            alignItems="center"
            bg="grey200"
            px={21}
            py={18}
            width="100%"
            borderRadius={12}>
            <Image source={images.searchIcon} />
            <Input
              color="black"
              placeholder="Search by ID, Name, City"
              placeholderTextColor={theme.colors.secondary}
              value={searchString}
              onChangeText={setSearchString}
              fontFamily="Poppins500"
              fontSize="subTitle"
              ml={16}
            />
          </Container>
          <Touchable
            flexDirection="row"
            alignItems="center"
            py={26}
            activeOpacity={0.6}>
            <Container mr={27}>
              <Image source={images.pumpIcon} />
            </Container>
            <Container flex={1}>
              <Typography fontFamily="Poppins600" fontSize="title">
                1041700
              </Typography>
              <Typography
                fontFamily="Poppins600"
                fontSize="body"
                color="secondary">
                ISLAND_LAKE_BP
              </Typography>
            </Container>
          </Touchable>
          <Touchable
            flexDirection="row"
            alignItems="center"
            py={26}
            activeOpacity={0.6}>
            <Container mr={27}>
              <Image source={images.pumpIcon} />
            </Container>
            <Container flex={1}>
              <Typography fontFamily="Poppins600" fontSize="title">
                1041700
              </Typography>
              <Typography
                fontFamily="Poppins600"
                fontSize="body"
                color="secondary">
                ISLAND_LAKE_BP
              </Typography>
            </Container>
          </Touchable>
          <Touchable
            flexDirection="row"
            alignItems="center"
            py={26}
            activeOpacity={0.6}>
            <Container mr={27}>
              <Image source={images.pumpIcon} />
            </Container>
            <Container flex={1}>
              <Typography fontFamily="Poppins600" fontSize="title">
                1041700
              </Typography>
              <Typography
                fontFamily="Poppins600"
                fontSize="body"
                color="secondary">
                ISLAND_LAKE_BP
              </Typography>
            </Container>
          </Touchable>
        </Container>
      </Container>
    </HideKeyboard>
  );
};
