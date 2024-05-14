import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from './pages/LoginScreen';
import SplashScreen from './pages/SplashScreen'; // Create an SplashScreen component
import DashboardScreen from './pages/DashboardScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
              <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;