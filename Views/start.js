import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';

  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  
const Start = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.darker 
  };
  const StartButton = ({ title, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{color: 'black'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
        <View style={styles.header}>
        <Image
        style={styles.logo}
        source={require('../Static/bombomlogga_Rityta1.png')}
      />
      </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Section >
            Welcome to the classic game: <Text /* style={styles.highlight} */>Choose the right chest</Text> 
          </Section>
          
          
          {/* <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section> */}
          <StartButton title="Start" onPress={() => 
                      navigation.navigate('Game1'
                      )}
          />
          <StartButton title="How to play" onPress={() => 
                      navigation.navigate('Game1'
                      )}
          />
          
        </View>
     
    </SafeAreaView>
  );
}
const Section = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}> 
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            
          ]}>
          {children}
        </Text>
      </View>
    );
  };

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
      color: 'white'
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

  export default Start;