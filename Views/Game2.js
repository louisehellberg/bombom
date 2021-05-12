import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Vibration} from 'react-native';
  
const Game2 = ({ navigation }) => {
  
const PickChestButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const vibration_pattern_empty = [1000, 2000, 3000];
const vibration_pattern_bomb1 = [3000, 1000, 2000];
const vibration_pattern_bomb2 = [2000, 3000, 1000];

const outer_vibration_list = [vibration_pattern_empty, vibration_pattern_bomb1, vibration_pattern_bomb2];
var currentIndex = outer_vibration_list.length, temporaryValue, randomIndex;

while (0 !== currentIndex) {
  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = outer_vibration_list[currentIndex];
  outer_vibration_list[currentIndex] = outer_vibration_list[randomIndex];
  outer_vibration_list[randomIndex] = temporaryValue;
}

const chest_vibration1 = outer_vibration_list[0];
const chest_vibration2 = outer_vibration_list[1];
const chest_vibration3 = outer_vibration_list[2];

const chest_button1 = 'true';
const chest_button2 = 'true';
const chest_button3 = 'true';

if (chest_vibration1 == vibration_pattern_empty) {
  chest_button1 = 'false';
}
else if (chest_vibration2 == vibration_pattern_empty) {
  chest_button2 = 'false';
}
else if (chest_vibration3 == vibration_pattern_empty) {
  chest_button3 = 'false';
}

/* ska vi ha massa patterns där de 3 som används slumpas fram(alternativt att bomben r samma och de andra slumpas) eller ska vi bara ha tre där bomben alltid är samma. Därefter ska de randomiseras i game2 */  
return (
  <SafeAreaView >
    
    <View style={styles.background}>
      <Text style={styles.infoTitle}>ARE YOU READY?</Text>
    </View>

    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => Vibration.vibrate(chest_vibration1)}>
        <Image
            style={styles.image}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Vibration.vibrate(chest_vibration2)}>
        <Image
            style={styles.image}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Vibration.vibrate(chest_vibration3)}>
        <Image
            style={styles.image}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.buttonContainer}>
      <PickChestButton title="Pick" onPress={() => 
        navigation.navigate('Confirmation', {
          resultParam: chest_button1,
        })}
      />
      <PickChestButton title="Pick" onPress={() => 
        navigation.navigate('Confirmation', {
          resultParam: chest_button2,
        })}
      />
      <PickChestButton title="Pick" onPress={() => 
        navigation.navigate('Confirmation', {
          resultParam: chest_button3,
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