import React, {useState} from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
import {checkEquality} from '../helpers/utils';
import {useStations} from '../hooks/query/useStations';
import {screenNames} from '../navigation/screenNames';

export const Stations = () => {
  const navigation = useNavigation();

  const [searchString, setSearchString] = useState('');
  const {useGetStations} = useStations();
  const {data: stations, isLoading} = useGetStations();

  const filteredStations = stations?.filter(
    ({name, pantone_value}) =>
      checkEquality(name, searchString) ||
      checkEquality(pantone_value, searchString),
  );

  const keyExtractor = item => item.id;
  const renderItem = ({item}) => {
    return (
      <Touchable
        onPress={() => navigation.navigate(screenNames.Details, {item})}
        flexDirection="row"
        alignItems="center"
        py={26}
        activeOpacity={0.6}>
        <Container mr={27}>
          <Image source={images.pumpIcon} />
        </Container>
        <Container flex={1}>
          <Typography fontFamily="Poppins600" fontSize="title">
            {item.pantone_value}
          </Typography>
          <Typography fontFamily="Poppins600" fontSize="body" color="secondary">
            {item.name}
          </Typography>
        </Container>
      </Touchable>
    );
  };
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
            height={60}
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
              flex={1}
              lineHeight="20px"
            />
          </Container>
          {isLoading ? (
            <Container flex={1} alignItems="center" mt={50}>
              <ActivityIndicator color={theme.colors.secondary} size="small" />
            </Container>
          ) : (
            <FlatList
              style={styles.flatList}
              data={filteredStations ?? []}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              onScrollBeginDrag={Keyboard.dismiss}
              ItemSeparatorComponent={() => (
                <Container borderBottomWidth={1} borderBottomColor="grey200" />
              )}
              contentContainerStyle={styles.contentContainer}
            />
          )}
        </Container>
      </Container>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
  contentContainer: {
    paddingBottom: 30,
  },
});
