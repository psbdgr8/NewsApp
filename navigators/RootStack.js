import React from 'react';
import { Colors } from './../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './../screens/Welcome';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer style={{ backgroundColor: 'red' }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
      >
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
