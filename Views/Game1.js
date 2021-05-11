import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from 'react-native';
import StartButton from '../Components/StartBtn';


  
const Game1 = ({navigation}) => {
  const StartButton = ({ title }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Confirmation')} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
    return (
        <SafeAreaView >
         
        <View style={styles.background}>
        <Text style={styles.infoTitle}>ARE YOU READY?</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require('../Assets/closed.png')}
            />
            <Image
                style={styles.image}
                source={require('../Assets/closed.png')}
            />
            <Image
                style={styles.image}
                source={require('../Assets/closed.png')}
            />
        </View>
        <View style={styles.buttonContainer}>
        <StartButton title="Start" size="sm"/>
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