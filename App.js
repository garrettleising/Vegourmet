/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CameraContainer from './components/CameraContainer';
import HomeScreen from './components/HomeScreen';
import ListScreen from './components/ListScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      
      <NavigationContainer style={styles.nav}>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />

        <Stack.Screen 
        name="Camera" 
        component={CameraContainer} 
        />

        <Stack.Screen 
        name="List" 
        component={ListScreen} 
        />
      </Stack.Navigator>
      </NavigationContainer>
        
    </>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});

export default App;
