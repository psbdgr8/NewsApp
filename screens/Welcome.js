import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InshortTabs from '../components/InshortTabs';
import { StyleSheet, View } from 'react-native';
import Context from "../API/Context";
const Welcome = () => {
  return (
    <Context>
      <View options={{ headerShown: false }}>
      <StatusBar style="light" />
      </View>
      <View style={styles.container}>
        <InshortTabs />
      </View>
    </Context>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "black",
  },
});

export default Welcome;
