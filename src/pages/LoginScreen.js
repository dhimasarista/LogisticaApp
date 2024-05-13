import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { getScreenDimensions } from '../utils/getDimension';
import { MAIN_COLOR } from '../utils/colors';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    Alert.alert(`Hello, ${username}`)
    // You might use an API call or other authentication mechanism here
  };

  const forgottenPassword = () => {
    Alert.alert(`Contact your administrator`)
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

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#262D3D',
    alignItems: 'center',
  },
  logoImage: {
    width:  250,
    height: 250,
    top: height/20
  },
  loginContainer: {
    backgroundColor: '#ffff',
    color: "black",
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: width / 1.3,
    top: height/20
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: MAIN_COLOR,
    marginBottom: 20,
  },
  inputField: {
    color: MAIN_COLOR,
    padding: 15,
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
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
