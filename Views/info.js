import React from 'react';

import { SafeAreaView, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import StartBtn from '../Components/StartBtn';


const Info = ({navigation}) => {

    const StartButton = ({ title }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Game1')} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );

    return (
      <SafeAreaView>
            <Text style={styles.infoTitle}>HOW TO PLAY</Text>
            <Text style={styles.infoText}>The purpose of the game is to choose the chest WITHOUT a bomb. 
                                        When clicking on start, the chests will move around in random order. 
                                        Your task is then to click on the chest that you think does NOT contain a bomb. 
            </Text>
            <Text style={styles.infoText}>Do you think you can do it?</Text>
           
            <View style={styles.screenContainer}>
            
              <StartButton title="Start" size="sm"/>
            </View>

      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#FFBE5E",
      borderRadius: 10,
      paddingVertical: 2,
      paddingHorizontal: 6,
   
    },
    appButtonText: {
      fontSize: 18,
      color: "#2E2E2E",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    infoTitle: {
        textAlign: "center", 
        marginBottom: 7, 
        marginTop: 7,
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
    screenContainer: {
        margin: 'auto',
        marginLeft: 140,
        marginTop: 10,
        width: 100,  
       
    }
  });

  export default Info;
  

