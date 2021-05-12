import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Vibration } from 'react-native';
import StartButton from '../Components/StartBtn';
  
const Game1 = ({navigation}) => {
  const StartButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

const vibration_pattern_empty = [1000, 2000, 3000];
const vibration_pattern_bomb1 = [3000, 1000, 2000];
const vibration_pattern_bomb2 = [2000, 3000, 1000];

/* ska vi ha massa patterns där de 3 som används slumpas fram(alternativt att bomben r samma och de andra slumpas) eller ska vi bara ha tre där bomben alltid är samma. Därefter ska de randomiseras i game2 */  
  return (
      <SafeAreaView >
      
        <View style={styles.background}>
          <Text style={styles.infoTitle}>ARE YOU READY?</Text>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => Vibration.vibrate(vibration_pattern_empty)}>
            <Image
                style={styles.image}
                source={require('../Assets/open.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Vibration.vibrate(vibration_pattern_bomb1)}>
            <Image
                style={styles.image}
                source={require('../Assets/open.png')}
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
    
  header: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2e2e2e'
  },
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

export default Game1;