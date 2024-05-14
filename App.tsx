// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './src/screens/home';
import User from './src/screens/User';
import Edit from './src/screens/Notification';
import Favourite from './src/screens/Favourite';
import HomeIcon from 'react-native-vector-icons/Feather'
import SplashScreen from './src/components/splash';
import DetailPage from './src/screens/DetailPage';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator(){
  return(
    <Tab.Navigator
    // initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor:'lightgrey',
      headerShown:false
    }}
  
  >
    <Tab.Screen
      name="home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Edit}
      options={{
        tabBarLabel: 'Notification',
        tabBarIcon: ({ color, size }) => (
          <HomeIcon name="bell" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}
    />
    <Tab.Screen
      name="heart"
      component={Favourite}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cards-heart-outline" color={color} size={size} />
        ),
      }}
    />
      <Tab.Screen
      name="user"
      component={User}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <HomeIcon name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name="splash" component={SplashScreen}  />
        <Stack.Screen name="home" component={BottomTabNavigator}  />
        <Stack.Screen name="detail" component={DetailPage}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;