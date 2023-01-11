import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {AppNavigator} from './navigation/AppNavigator';
import {theme} from './theme';

export const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
