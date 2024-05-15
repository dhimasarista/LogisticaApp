import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { getScreenDimensions } from '../utils/getDimension';
import { MAIN_COLOR } from '../utils/colors';
import storage from '../utils/storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const forgottenPassword = () => {
    Alert.alert(`Contact your administrator`)
  }

  const handleLogin = () => {
    if (username === "dhimasarista" && password === "010502") {
      navigation.navigate("MainApp")
      storage.set("user.username", "dhimasarista")
    } else {
      Alert.alert("Attention", `Check your Username or Password Correctly!`)
    }
  }

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Image style={styles.logoImage} source={require("../assets/images/Logistica-Logo-Dark.png")} />
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          style={styles.inputField}
          placeholderTextColor="black"
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          </TouchableOpacity>

          <TouchableOpacity onPress={forgottenPassword}>
            <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = getScreenDimensions()
const minOfScreen = Math.min(width, height) * 1

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#262D3D',
    alignItems: 'center',
  },
  logoImage: {
    width:  minOfScreen / 1.5,
    height: minOfScreen/ 1.5,
    top: minOfScreen / 20
  },
  loginContainer: {
    backgroundColor: '#ffff',
    color: "black",
    padding: minOfScreen / 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: minOfScreen / 1.3,
    top: minOfScreen/30
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: MAIN_COLOR,
    marginBottom: 20,
  },
  inputField: {
    color: MAIN_COLOR,
    padding: minOfScreen / 50,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  forgotPasswordLink: {
    color: '#333',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: MAIN_COLOR,
    padding: minOfScreen / 40,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: minOfScreen / 25,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
