import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function TabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
    tabBarOptions = {
      {
        activeTintColor: '#008272',
        inactiveTintColor: '#ffffff',
        style: styles.BottomTab,
        labelStyle: styles.BottomTabText
      }}
    initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, tintColor }) => <TabBarIcon color = {tintColor} focused={focused} name="md-home" />,
          
        }}
        
      />
      <BottomTab.Screen
        name="Page 2"
        component={HomeScreen}
        options={{
          title: 'Start Disco',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add-circle" />,
        }}
      />
      <BottomTab.Screen
        name="Page 3"
        component={HomeScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  BottomTab: {
    backgroundColor:'#000000',
    borderTopColor:'#000000'
  },
  BottomTabText:{
    
  }
  
});