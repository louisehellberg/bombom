import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

const Info = () => {

    return (
      <SafeAreaView>

            <Button title="CLOSE" onPress={() => Alert.alert("Closing")} color="#FFBE5E" ></Button>

            <Text style={{fontSize: 40, textAlign: "center", marginBottom: 2}}>HOW TO Play</Text>
            <Text style={{fontSize: 15, textAlign: "center"}}>The purpose of the game is to choose the chest WITHOUT a bomb. 
                                        When clicking on start, the chests will move around in random order. 
                                        Your task is then to click on the chest that you think does NOT contain a bomb. 
            </Text>
            <Text style={{fontSize: 15, textAlign: "center"}}>Do you think you can do it?</Text>
           
            <Button title="START" onPress={() => Alert.alert("Starting game")} color="#FFBE5E" ></Button>

      </SafeAreaView>
    );
  };

  export default Info;
  