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
    Alert
  } from 'react-native';

const Game1 = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#2e2e2e'}}>
        <View style={styles.background}>
          <Text>Info</Text>
        </View>
        <View>
            
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
  background: {
      backgroundColor: '#2e2e2e'
  }
  
  });

export default Game1;