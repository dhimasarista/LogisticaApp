import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { getScreenDimensions } from '../utils/getDimension';
import { MAIN_COLOR } from '../utils/colors';

const { height, width } = getScreenDimensions();
const minOfScreen = Math.min(width, height) * 1; 
export default SplashScreen = ({navigation}) => {
  const [isAuth, setAuth] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      if (isAuth) {
        navigation.navigate("MainApp")
      } else {
        navigation.navigate("Login")
      }
    }, 2000); // Delay for 2 seconds
  }, []);
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Image
        source={require("../assets/images/Logistica-Logo-Dark.png")}
        style={styles.logo(minOfScreen)}
      />
      <Text style={styles.name}>dhimasarista.github.io</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: MAIN_COLOR,
    color: "white",
    flex: 1,
    alignItems: 'center', // Center elements horizontally
    justifyContent: 'center', // Center elements vertically
  },
  logo: (size) => ({
    width: size,
    height: size,
    resizeMode: 'contain', // Maintain aspect ratio
  }),
  name: {
    fontSize: minOfScreen / 25, // Adjust font size as needed
    fontWeight: 'bold',
    color: "white",
    bottom: minOfScreen / 10,
    position: "absolute"
  },
});
