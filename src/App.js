import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={styles.text}>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {color: 'black', fontFamily: 'Poppins-Regular'},
});
