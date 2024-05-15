import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './pages/LoginScreen';
import SplashScreen from './pages/SplashScreen'; // Create an SplashScreen component
import DashboardScreen from './pages/DashboardScreen';
import ProfileScreen from './pages/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                <MaterialCommunityIcons name="view-dashboard" size={size} color={color} />
              ),
            }} 
          />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
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