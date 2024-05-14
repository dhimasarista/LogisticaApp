import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from './pages/LoginScreen';
import SplashScreen from './pages/SplashScreen'; // Create an SplashScreen component
import DashboardScreen from './pages/DashboardScreen';

const App = () => {
  const [isReady, setIsReady] = useState(false); // State for app initialization
  const [isAuth, setAuth] = useState(false); // State for authentication status

  useEffect(() => {
    // Simulate some initialization tasks (replace with your actual logic)
    setTimeout(() => {
      setIsReady(true);
    }, 2000); // Delay for 2 seconds
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {isReady ? (
          isAuth ? (
            <Stack.Navigator>
              <Stack.Screen
                name="DashboardScreen"
                component={DashboardScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          )
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="initial"
              component={SplashScreen}
              options={{ headerShown: false }} // Hide header for SplashScreen
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
