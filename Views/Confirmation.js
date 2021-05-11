import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Confirmation = ({navigation}) => {

  const YesButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.yesButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const NoButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.noButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

    return (
      <SafeAreaView>

            <Text style={{fontSize: 20, textAlign: "center", color: 'white', marginBottom: 10}}>Are you sure?</Text>
            
            <View style={styles.screenContainer}>
                <View style={styles.buttonContainer}>
                    <YesButton title="Yes"/>
                </View>

                <View style={styles.buttonContainer}>
                    <NoButton title="No"/>
                </View>
            </View>

      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    yesButtonContainer: {
      elevation: 8,
      backgroundColor: "#A8D8A0",
      borderRadius: 10,
      paddingVertical: 2,
      paddingHorizontal: 2
    },
    noButtonContainer: {
        elevation: 8,
        backgroundColor: "#D87D7D",
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 2
      },
    appButtonText: {
      fontSize: 18,
      color: "#2E2E2E",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    screenContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    }, 
    buttonContainer: {
        margin: 5,
        width: 100,
    }
    

  });

  export default Confirmation;
  

