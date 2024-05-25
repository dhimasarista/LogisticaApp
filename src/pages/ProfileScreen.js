import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import storage from '../utils/storage';
import { getScreenDimensions } from '../utils/getDimension';
import { MAIN_COLOR } from '../utils/colors';
import Circle from '../components/circle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import pageStyle from "../pages/stylesheet"

const { width, height } = getScreenDimensions();

const IconList = [
  { id: '1', iconName: 'logo-octocat', title: "Hello" },
  { id: '2', iconName: 'airplane-sharp', title: "World" },
  { id: '3', iconName: 'alert-circle-sharp', title: "Oke" },
];

const ProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = storage.getString("user.username");
    setUsername(user);
  }, []);

  const handleLogout = () => {
    storage.clearAll();
    setUsername("");
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={pageStyle.header}>Profile</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="exit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        {/* <Image style={styles.profileImage} source={require('../assets/images/Logistica-Logo-Dark.png')} /> */}
          <Avatar.Text size={100} label="XD" />
        <View style={styles.infoContainer}>
          <Text style={styles.profileName}>{username}</Text>
          <Text style={styles.positionText}>Supervisor</Text>
          <View style={styles.divider} />
        </View>
      </View>
      {/* <FlatList
        data={IconList}
        renderItem={({ item }) => (
          <View style={styles.iconContainer}>
            <Circle content={<Ionicons name={item.iconName} size={30} color={MAIN_COLOR} />} />
            <Text style={styles.iconText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      /> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight || 0,
    paddingHorizontal: width / 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: MAIN_COLOR,
    padding: 10,
    borderRadius: 5,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  infoContainer: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    color: "black",
    marginBottom: 5,
  },
  positionText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginBottom: 10,
  },
  iconContainer: {
    marginHorizontal: width / 22,
    alignItems: "center",
  },
  iconText: {
    color: "black",
    paddingTop: 10,
  },
});
