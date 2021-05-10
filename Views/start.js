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
    Image
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

  return (
    <SafeAreaView style={backgroundStyle}>
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
        <View
          style={{
            backgroundColor: '#2e2e2e',
          }}>
          <Section >
            Welcome to the classic game: <Text /* style={styles.highlight} */>Choose the right chest</Text> 
          </Section>
          
          
          {/* <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section> */}
          <Button title="start" onPress={() => navigation.navigate('Game1')} color="#FFBE5E" style={styles.btn}/>
          <Button title="How to play" onPress={() => navigation.navigate('Info')} style={styles.btn}/>
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
  }
  
  });

  export default Start;