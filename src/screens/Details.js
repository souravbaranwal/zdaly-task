import React, {useEffect, useState, useRef} from 'react';
import dayjs from 'dayjs';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import {images} from '../assets/images';
import {setTimerAction} from '../redux/slices/stations';
import {Container, Header, Typography, Button, Touchable} from '../components';

export const Details = () => {
  const timerRef = useRef(null);
  const {
    params: {
      item: {id},
    },
  } = useRoute();
  const dispatch = useDispatch();
  const timers = useSelector(({stations: {timers}}) => timers);
  const timer = timers[id];
  const diffSeconds = dayjs().diff(dayjs(timer?.startedAt)) / 1000;
  const [secondsPassed, setSecondsPassed] = useState(
    diffSeconds > 0 ? diffSeconds : 0,
  );

  const handleStart = () => {
    dispatch(setTimerAction({id, startedAt: dayjs().format(), isActive: true}));
    setSecondsPassed(diffSeconds > 0 ? diffSeconds : 0);
  };
  const handleStop = () => {
    dispatch(setTimerAction({id, startedAt: null, isActive: false}));
  };

  useEffect(() => {
    if (timer?.isActive) {
      timerRef.current = setInterval(() => {
        setSecondsPassed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [timer?.isActive]);

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
          {timer?.isActive ? 'Station Subscribed' : 'Subscribe Station'}
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
                {timer?.isActive ? parseInt(secondsPassed) : 0}
              </Typography>
              <Typography
                fontFamily="Poppins600"
                fontSize="small"
                lineHeight="32px">
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
              onPress={timer?.isActive ? handleStop : handleStart}
              label={timer?.isActive ? 'Stop' : 'Start'}
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
