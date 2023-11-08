import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { useState } from 'react';
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import axios from 'axios'

const Login = ({ dispatchLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    axios
      .post('http://test.ecoforest.green/api/v1/auth/login', { email, password })
      .then((response) => {
        const data = response.data;
        if (data.token) {
          // Save the token locally
          setToken(data.token);
          dispatchLogin( data.user, token );
          navigation.navigate('Dashboard');
        } else {
          setError('Login failed');
        }
      })
      .catch((_error) => {
        setError('Login failed ');
      });
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }} behavior="padding">
    <View style={styles.login}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape1.png")}
      />
      <Text style={[styles.getStarted, styles.getStartedTypo]}>Welcome Back!</Text>
      <Image
        style={styles.undrawAccessAccountRe8spmIcon}
        contentFit="cover"
        source={require("../assets/undraw-access-account-re-8spm-1.png")}
      />
      <View style={styles.inputContainerMain}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="mary.elliot@mail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="**************"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        </View>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={styles.dontHaveAn}>Don't have an account?</Text>
        <Text style={styles.signUpTypo}>Sign Up</Text>
        </Pressable>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  getStartedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
  },
  signUpTypo: {
    color: Color.colorMediumturquoise_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  inputContainerMain: {
    marginTop: 30
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  input: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    height: 50,
    paddingLeft: 10,
  },
  getStarted: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    padding: 20
  },
  button: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumturquoise_100,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  shapeIcon: {
    width: 200,
    height: 180,
    top: -120,
    left: -100,
    objectFit: 'cover'
  },
  dontHaveAn: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  dontHaveAnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPassword: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  undrawAccessAccountRe8spmIcon: {
    width: 180,
    height: 180,
    alignSelf: "center",
  },
   errorText: {
    color: "red",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    marginBottom: 10,
  },
});

const mapDispatchToProps = {
  dispatchLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);