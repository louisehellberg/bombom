import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Vibration} from 'react-native';
import StartButton from '../Components/StartBtn';
  
const Game2 = ({ navigation }) => {
  const StartButton = ({ title }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Confirmation')} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>);

const PickChestButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const ONE_SECOND_IN_MS = 1000;

const PATTERN_BOMB = [
  3 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
];

const PATTERN1 = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS
];

const PATTERN2 = [
  2 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS
];

var chest_contains_bomb = '';

function randomizer() {
  
}

/* ska vi ha massa patterns där de 3 som används slumpas fram(alternativt att bomben r samma och de andra slumpas) eller ska vi bara ha tre där bomben alltid är samma. Därefter ska de randomiseras i game2 */  
return (
  <SafeAreaView >
    
    <View style={styles.background}>
      <Text style={styles.infoTitle}>ARE YOU READY?</Text>
    </View>

    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => Vibration.vibrate(PATTERN_BOMB)}>
        <Image
            style={styles.image}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Vibration.vibrate(PATTERN1)}>
        <Image
            style={styles.image}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Vibration.vibrate(PATTERN2)}>
        <Image
            style={styles.image}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.buttonContainer}>
      <PickChestButton title="Pick" onPress={() => 
        navigation.navigate('Confirmation', {
          resultParam: 'true',
        })}
      />
      <PickChestButton title="Pick" onPress={() => 
        navigation.navigate('Confirmation', {
          resultParam: 'true',
        })}
      />
      <PickChestButton title="Pick" onPress={() => 
        navigation.navigate('Confirmation', {
          resultParam: 'true',
        })}
      />
    </View>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoTitle: {
    textAlign: "center", 
    marginBottom: 7, 
    marginTop: 7,
    color: 'white',
    fontSize: 40
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
    height: 80,
    margin: 10
  },
  imageContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
  }

  });

export default Game2;