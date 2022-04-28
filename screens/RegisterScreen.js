import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
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
} from "react-native";
import { auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = props => {
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


  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="black" />
    <Text style={styles.regitext}>Registration</Text>
      <View style={styles.inputContainer}>
        {/* <Text style={styles.inputt}>Name</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
          placeholderTextColor={"white"}
          style={styles.input}
          autoCapitalize="none"
        /> */}
        <Text style={styles.inputt}>Email</Text>
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
        <Text style={styles.inputt}>Password</Text>
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
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Confirm</Text>
        </TouchableOpacity><TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.regi}>
            <Text style={styles.registerText}>
              Already registered? Login here!
            </Text>
          </TouchableOpacity>
      </View>
      </View>
      </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    contain:{
        flex:1,
    },
    registerText: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 10,
        color: "#0782F9",
        textAlign: 'center',
      },
      regi: {
        paddingTop: 20,
        width: "100%",
        alignItems: "center",
        justifyContent:"center",
      },
  container: {
      flex: 1,
      flexDirection:"column",
    backgroundColor: "black",
  },
  inputt: {
    color: "white",
    marginLeft: 10,
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 5  
  },
  imageContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  regitext: {
    color: "white",
    fontSize: 50,
    fontWeight: "900",
    alignSelf:"center",
    paddingTop: 15
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  inputContainer: {
    flex: 1,
    paddingLeft:"10%",
    justifyContent: "center",
    paddingRight:"10%",

  },
  buttonContainer: {
    width: "60%",
    marginTop: 30,
    alignSelf:"center"
  },
  input: {
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "white",
    borderWidth: 1,
    fontSize: 14,
    color: "white",
  },
  button: {
    backgroundColor: "black",
    width: "100%",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    borderColor: "#0782F9",
    borderWidth: 2,
    elevation:5,
  },
  buttonOutline: {
    backgroundColor: "black",
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
