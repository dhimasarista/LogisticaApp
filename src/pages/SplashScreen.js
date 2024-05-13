import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { getScreenDimensions } from './utils/getDimension';
import { MAIN_COLOR } from './utils/colors';

export default SplashScreen = () => {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <Image source={require("./assets/images/Logistica-Logo-Dark.png")} style={styles.logo}></Image>
            <Text style={styles.name}>dhimasarista.github.io</Text>
        </SafeAreaView>
    );
  };

const { height, width } = getScreenDimensions();
const logoSize = 400;
const styles = StyleSheet.create({
    logo: {
        top: height / 4,
        justifyContent: 'center',
        paddingHorizontal: width /2,
        width: logoSize,
        height: logoSize,
    },
    name: {
        fontSize: 12,
        fontWeight: 'black',
        color: "white",
        position: "absolute",
        bottom: height/15,
        paddingHorizontal: width/3
    },
    backgroundContainer: {
        backgroundColor: MAIN_COLOR,
        color: "white",
        flex: 1,
    }
})