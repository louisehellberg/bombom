import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Confirmation = ({ navigation }) => {

  const ConfirmationButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

    return (
      <SafeAreaView>

            <Text style={{fontSize: 20, textAlign: "center", color: 'white', marginBottom: 10}}>Are you sure?</Text>
            
            <View style={styles.screenContainer}>
                <View style={styles.buttonContainer, backgroundColor='#A8D8A0'}>
                    <ConfirmationButton title="Yes" onPress={() => 
                      navigation.navigate('Result', {
                        resultParam: 'true',
                      })}
                    />
                </View>

                <View style={styles.buttonContainer, backgroundColor='#D87D7D'}>
                    <ConfirmationButton title="No" onPress={() => navigation.navigate('Game1')}/>
                </View>
            </View>

      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
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