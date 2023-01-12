import React from 'react';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {ThemeProvider} from 'styled-components';
import {StyleSheet, SafeAreaView} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {AppNavigator} from './navigation/AppNavigator';
import {theme} from './theme';
import Store, {Persistor} from './redux/store';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <AppNavigator />
              <Toast />
            </QueryClientProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
