import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>DashboardScreen</Text>
    </SafeAreaView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        color: "black"
    }
})