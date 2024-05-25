import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { getScreenDimensions } from '../utils/getDimension';
import { MAIN_COLOR } from '../utils/colors';
import storage from '../utils/storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [doLogin, setDoLogin] = useState(false);

  const forgottenPassword = () => {
    Alert.alert(`Contact your administrator`)
  }

  const handleLogin = async () => {
    setDoLogin(true); // Mengatur status doLogin menjadi true saat login dimulai
  
    setTimeout(async () => { // Menambahkan penundaan sebelum melakukan login
      try {
        const usernameData = "dhimasarista";
        const passwordData = "010502";
        if (username === usernameData && password === passwordData) {        
          // Simpan token ke penyimpanan lokal
          storage.set("user.username", username);
          // Navigasi ke layar berikutnya setelah berhasil login
          navigation.replace("MainApp");
        } else {
          Alert.alert("Attention", `Check your Username or Password Correctly!`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert("Error", "Failed to connect to server. Please try again later.");
      } finally {
        setDoLogin(false); // Setelah login selesai, kembalikan status doLogin ke false
      }
    }, 5000); // Penundaan 5 detik sebelum memanggil fungsi handleLogin
  };
  

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
          value={storage.getString("user.username-form-temporary", username)}
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

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={doLogin}>
          <Text style={styles.loginButtonText}>{doLogin === true ? <ActivityIndicator size="small" color="#f0f8ff" /> : "Login"}</Text>
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
    justifyContent: 'center',
    height: height / 18
  },
  loginButtonText: {
    color: '#fff',
    fontSize: minOfScreen / 25,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
