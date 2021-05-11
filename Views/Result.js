import React from 'react';
import { SafeAreaView, Text, View, Button, TouchableOpacity, Image } from 'react-native';

const Result = ({ navigation, route }) => {

    const PlayAgainButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );

    const { resultParam } = route.params;

    function display_chest() {
        if (resultParam == 'true') {
            return (
                <Image
                    style={styles.result_image}
                    source={require('../Assets/open.png')}
                />
            );
        } else {
            return (
                <Image
                    style={styles.result_image}
                    source={require('../Assets/closed.png')}
                />
            );
        }
    }


/*     const chest = resultParam
    ? require('../Assets/open.png')
    : require('../Assets/closed.png'); */

    return (
      <SafeAreaView>

        <View style={styles.container}>
            {display_chest()}
        </View>
            
            <View style={styles.buttonContainer}>
                <PlayAgainButton title="Play again"/>
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
      paddingHorizontal: 2,
      width: 100,
      margin: 5
    },
    appButtonText: {
      fontSize: 18,
      color: "#2E2E2E",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    buttonContainer: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    container: {
        justifyContent: 'center',
    },
    result_image: {
        width: 100,
        height: 100,
    }
    
  });

  export default Result;
  

