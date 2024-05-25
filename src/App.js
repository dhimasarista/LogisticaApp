import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './pages/LoginScreen';
import SplashScreen from './pages/SplashScreen'; // Create an SplashScreen component
import DashboardScreen from './pages/DashboardScreen';
import ProfileScreen from './pages/ProfileScreen';
import Ionicons  from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainApp() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Dashboard" 
            component={DashboardScreen} 
            options={{ 
              headerShown: false ,
              tabBarIcon: ({focused, color, size}) => (
                <Ionicons name="bar-chart" size={size} color={color}/>
                ),
              }} 
            />
            <Tab.Screen 
              name="Items" 
              component={ProfileScreen} 
              options={{ headerShown: false , tabBarIcon: ({focused, color, size}) => (
                <Ionicons name="logo-octocat" size={size} color={color}/>
              )}} 
            />
            <Tab.Screen 
              name="Profile" 
              component={ProfileScreen} 
              options={{ headerShown: false , tabBarIcon: ({focused, color, size}) => (
                <Ionicons name="logo-octocat" size={size} color={color}/>
              )}} 
            />
        </Tab.Navigator>
    );
}


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;