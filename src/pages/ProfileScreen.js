import { Button, Image, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import storage from '../utils/storage'
import { getScreenDimensions } from '../utils/getDimension';

const {width, height} = getScreenDimensions()
const DATA = [
  {
    title: 'Dhimas Arista',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
];

const ProfileScreen = ({navigation}) => {
  const [username, setUsername] = useState("")
  useEffect(() => {
    setUsername(storage.getString("user.username"))
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={require('../assets/images/Logistica-Logo-Dark.png')} />
        </View>
        <Text style={styles.profileName}>{username}</Text>
        <Button title='Logout' onPress={() => {
          storage.clearAll()
          setUsername("")
          navigation.replace("Login")
        }}/>
      </View> */}
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        paddingTop: height / 100,
        paddingHorizontal: width / 20,
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
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      color: "black"
    },
    title: {
      fontSize: 24,
    },
})