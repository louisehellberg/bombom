import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Vibration } from 'react-native';
import StartButton from '../Components/StartBtn';
  
const Game1 = ({navigation}) => {
  const StartButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

const vibration_pattern_empty = [100, 200, 300];
const vibration_pattern_bomb1 = [100, 100, 100];
const vibration_pattern_bomb2 = [500, 100, 100];

/* ska vi ha massa patterns där de 3 som används slumpas fram(alternativt att bomben r samma och de andra slumpas) eller ska vi bara ha tre där bomben alltid är samma. Därefter ska de randomiseras i game2 */  
  return (
      <SafeAreaView >
      
        <View>
          <Text style={styles.infoTitle}>ARE YOU READY?</Text>
          <Text style={styles.infoText}>Drag your finger across the different chests to feel the vibration patterns and try to remember what pattern the chest without a bomb has!</Text>
          <Text style={styles.infoText}>When you feel ready and think that you can remember the different vibration patterns, click on START!</Text>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => Vibration.vibrate(vibration_pattern_empty)}>
            <Image
                style={styles.image}
                source={require('../Assets/openchestwithbomb.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Vibration.vibrate(vibration_pattern_bomb1)}>
            <Image
                style={styles.image}
                source={require('../Assets/openchestwithbomb.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Vibration.vibrate(vibration_pattern_bomb2)}>
            <Image
                style={styles.image}
                source={require('../Assets/open.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <StartButton title="Start" size="sm" onPress={() => navigation.navigate('Game2')}/>
        </View>
    
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoTitle: {
    textAlign: "center", 
    marginBottom: 20, 
    marginTop: 25,
    color: 'white',
    fontSize: 40
  },
  infoText: {
    textAlign: "center", 
    marginBottom: 7, 
    marginTop: 7,
    color: 'white',
    fontSize: 20
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FFBE5E",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    margin: 5,
    width: 100
  },
  appButtonText: {
    fontSize: 18,
    color: "#2E2E2E",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  },
  imageContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  }
  
  });

export default Game1;