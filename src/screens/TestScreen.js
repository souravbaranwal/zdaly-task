import React from 'react';

import {Typography, Container, TouchableIcon} from '../components';

export const TestScreen = () => {
  return (
    <Container px={16} bg="pink">
      <Typography>Test Screen</Typography>
      <TouchableIcon name="arrow-left-line" />
    </Container>
  );
};
