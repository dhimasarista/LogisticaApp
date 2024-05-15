import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={require('../assets/images/Logistica-Logo-Dark.png')} />
        </View>
        <Text style={styles.profileName}>John Doe</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        color: "black"
    },
    profileImage: {
      height: 300,
      width: 300,
      tintColor: "black"
    },
    profileName: {
      color: "black",
      fontSize: 20
    }
})