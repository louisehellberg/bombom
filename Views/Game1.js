import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Alert,
    TouchableOpacity
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
        <View>
        <StartButton title="Start" size="sm"/>
        </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  btn: {
    backgroundColor: "#FFBE5E"
  },
  logo: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
   
  },
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
  
  
  });

export default Game1;