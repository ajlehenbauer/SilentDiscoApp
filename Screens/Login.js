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
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Nav')}
          >
            <Text style = {styles.buttonText}>Login</Text>
          </TouchableOpacity>
            
            
          </View>
          
        </ScrollView>
        
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212121',
    },
    button: {
 
      marginTop:30,
      paddingTop:12,
      paddingBottom:12,
      paddingLeft:40,
      paddingRight: 40,
      alignItems: "center",
      backgroundColor:'#008272',
      borderRadius:50,
      borderWidth: 1,
      borderColor: '#000000'
    },
    
    buttonText:{
      fontSize:18,
      
    },
    loginContainer:{
      alignItems:'center',
      marginTop: 10,
      marginBottom: 20
    },
    OvalShapeView: {
      marginTop: 20,
      width: 100,
      height: 100,
      backgroundColor: '#00BCD4',
      borderRadius: 50,
      transform: [
        {scaleX: 2}
      ]
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
      },
    welcomeImage: {
      width: 200,
      height: 160,
      alignItems: "center",
      resizeMode: 'contain',
      marginTop: 300,
      
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
 
});