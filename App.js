/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Views/Start';
import InfoScreen from './Views/Info';

import React from 'react';
import {Node} from 'react';

const Stack = createStackNavigator();

const App = () =>{
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
