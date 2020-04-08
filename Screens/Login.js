import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet,Button, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { MonoText } from '../components/StyledText';


export default function Login(props) {
    const {navigation} = props
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/SilentDiscoLogo.png')
                  : require('../assets/images/SilentDiscoLogo.png')
              }
              style={styles.welcomeImage}
            />
          </View>
  
          <View style={styles.getStartedContainer}>
            <View style = {styles.loginContainer}>
              <Button
                onPress={() => navigation.navigate('Nav')}
                title="Login"
                color="#841584"
                accessibilityLabel="Login to account"
              />
             </View>
          </View>
          
        </ScrollView>
        
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4c4c4c',
    },

    loginContainer:{
      alignItems:'center',
      marginTop: 10,
      marginBottom: 20
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
      },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
 
});