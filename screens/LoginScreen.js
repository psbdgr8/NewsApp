import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useContext, useReducer, useCallback } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
      navigation.replace("Home")
    }
  })

  return unsubscribe
}, [])

const handleSignUp = () => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
    })
    .catch(error => alert(error.message))
}

const handleLogin = () => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
    })
    .catch(error => alert(error.message))
};

  return (
    <View style={styles.container}>
      <View>
        <StatusBar backgroundColor="black" />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/mainscreen.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.new}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            label="Email"
            id="email"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onChangeText={text => setEmail(text)}
            initialValue=""
            placeholderTextColor={"white"}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            label="Password"
            id="password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={6}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onChangeText={text => setPassword(text)}
            initialValue=""
            placeholderTextColor={"white"}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.regi}
          >
            <Text style={styles.registerText}>
              Not registered yet? Register here!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  registerText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    color: "#0782F9",
    textAlign: "center",
  },
  regi: {
    paddingTop: 20,
    width: "100%",
    elevation: 5,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -30,
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  new: {
    flex: 1,
    alignItems: "center",
    marginTop: -30,
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "60%",
    padding: 20,
    elevation: 10,
  },
  input: {
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    borderColor: "white",
    borderWidth: 1.5,
    fontSize: 14,
    color: "white",
  },
  button: {
    color: "blue",
    backgroundColor: "black",
    width: "100%",
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    borderColor: "#0782F9",
    borderWidth: 2,
    elevation: 4,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
