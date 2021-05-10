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
}
  
  
  });

export default Game1;