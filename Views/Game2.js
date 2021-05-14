import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Vibration} from 'react-native';
  
const Game2 = ({ navigation }) => {
  
const PickChestButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const patternEmptyChest = [100, 200, 300];
const patternBomb1Chest = [100, 100, 100];
const patternBomb2Chest = [500, 100, 100];

const oterPatternList = [patternEmptyChest, patternBomb1Chest, patternBomb2Chest];
var currentIndex = oterPatternList.length, temporaryValue, randomIndex;
console.log(currentIndex)

while (0 !== currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  temporaryValue = oterPatternList[currentIndex];
  oterPatternList[currentIndex] = oterPatternList[randomIndex];
  oterPatternList[randomIndex] = temporaryValue;
}

const chestVibration1 = oterPatternList[0];
const chestVibration2 = oterPatternList[1];
const chestVibration3 = oterPatternList[2];

let chestButton1 = 'true'; 
let chestButton2 = 'true';
let chestButton3 = 'true';

if (chestVibration1 == patternEmptyChest) {
  chestButton1 = 'false';
}
else if (chestVibration2 == patternEmptyChest) {
  chestButton2 = 'false';
}
else if (chestVibration3 == patternEmptyChest) {
  chestButton3 = 'false';
}

return (
  <SafeAreaView >
    
    <View>
      <Text style={styles.infoTitle}>MAKE YOUR PICK!</Text>
      <Text style={styles.infoText}>Identify the chest WITHOUT a bomb!</Text>
    </View>

    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => Vibration.vibrate(chestVibration1)}>

        <Image
            style={styles.actualImage}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Vibration.vibrate(chestVibration2)}>
        <Image
            style={styles.actualImage}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Vibration.vibrate(chestVibration3)}>
        <Image
            style={styles.actualImage}
            source={require('../Assets/closed.png')}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.screenContainer}>

      <View style={styles.buttonContainer}>
        <PickChestButton title="Pick" onPress={() => 
          navigation.navigate('Confirmation', {
            resultParam: chest_button1,
          })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PickChestButton title="Pick" onPress={() => 
          navigation.navigate('Confirmation', {
            resultParam: chest_button2,
          })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PickChestButton title="Pick" onPress={() => 
          navigation.navigate('Confirmation', {
            resultParam: chest_button3,
          })}
        />
      </View>

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
  screenContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }, 
  buttonContainer: {
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  actualImage: {
    width: 100,
    height: 80,
    margin: 10
  },
  imageContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  }

  });

export default Game2;