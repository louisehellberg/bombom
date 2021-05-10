import React from 'react';

import { SafeAreaView, Text, View, Button, TouchableOpacity } from 'react-native';

const Info = () => {

  const StartButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

    return (
      <SafeAreaView>

            <Button title="CLOSE" onPress={() => Alert.alert("Closing")} color="#FFBE5E" ></Button>

            <Text style={{fontSize: 40, textAlign: "center", marginBottom: 2}}>HOW TO Play</Text>
            <Text style={{fontSize: 15, textAlign: "center"}}>The purpose of the game is to choose the chest WITHOUT a bomb. 
                                        When clicking on start, the chests will move around in random order. 
                                        Your task is then to click on the chest that you think does NOT contain a bomb. 
            </Text>
            <Text style={{fontSize: 15, textAlign: "center"}}>Do you think you can do it?</Text>
           
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
      paddingHorizontal: 2
    },
    appButtonText: {
      fontSize: 18,
      color: "#2E2E2E",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

  export default Info;
  

