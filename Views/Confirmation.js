import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Confirmation = ({ navigation, route }) => {

  const ConfirmationButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  const { resultParam } = route.params;

    return (
      <SafeAreaView>

            <Text style={{fontSize: 20, textAlign: "center", color: 'white', marginBottom: 10}}>Are you sure?</Text>
            
            <View style={styles.screenContainer}>
                <View>
                    <Button title="Yes" onPress={() => 
                      navigation.navigate('Result', {
                        resultParam: resultParam,
                      })}
                    />
                </View>

                <View>
                    <Button title="No" onPress={() => navigation.navigate('Game1')}/>
                </View>
            </View>

      </SafeAreaView>
    );
  };
/* style={styles.buttonContainer, backgroundColor='#A8D8A0'}  style={styles.buttonContainer, backgroundColor='#D87D7D'}*/
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