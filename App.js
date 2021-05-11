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
import Start from './Views/start';
import InfoScreen from './Views/info';
import GameScreen1 from './Views/Game1';
import StartBtn from './Components/StartBtn';
import ConfirmationScreen from './Views/Confirmation';
import ResultScreen from './Views/Result';
import GameScreen2 from '.Views/Game2';

import React from 'react';
import {Node} from 'react';

const Stack = createStackNavigator();

const App = () =>{
  

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#2e2e2e' }
    }}>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Info" component={InfoScreen}/> 
        <Stack.Screen name="Game1" component={GameScreen1}/>
        <Stack.Screen name="Game2" component={GameScreen2}/>
        <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>
        <Stack.Screen name="Result" component={ResultScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
