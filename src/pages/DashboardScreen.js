import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import storage from '../utils/storage'

const DashboardScreen = () => {
  const [username, setUsername] = useState("")

  useEffect(() => {
    setUsername(storage.getString("user.username"))
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>DashboardScreen</Text>
      <Text style={styles.textContainer}>{username}</Text>
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