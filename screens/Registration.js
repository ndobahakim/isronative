import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { connect } from 'react-redux'
import { register } from '../actions/authActions';
import axios from 'axios'


const Registration = ({ dispatchRegister }) => {
  const navigation = useNavigation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(null);

const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Send a POST request to the '/signup' endpoint
    axios
      .post('https://test.ecoforest.green/api/v1/auth/create-account', {
        full_name: name,
        email,
        password,
      })
      .then((_response) => {
        navigation.navigate('Login');
          dispatchRegister( name, email );
      })
      .catch((error) => {
        console.log()
        if (error.response.data.status === 'success') {
          navigation.navigate('Login');
          dispatchRegister( name, email );
        }
        setError('Registration failed');
      });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }} behavior="padding">
    <ScrollView>
     <View style={styles.registration}>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.onboard}>
          <Text style={[styles.welcomeOnboard, styles.getStartedTypo]}>
            Welcome Onboard!
          </Text>
          <Text style={styles.letsHelpYouTypo}>
            Lets help you in completing your tasks
          </Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full name</Text>
        <TextInput
          style={styles.input}
          placeholder="Mary Elliot"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

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

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="**************"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={[styles.buttonText, styles.getStartedTypo]}>Register</Text>
      </Pressable>

      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text1Typo}>
          Already have an account? <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  getStartedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  letsHelpYouTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  frameIcon: {
    top: -40,
    left: -40,
    height: 200,
    width: 200
  },
  welcomeOnboard: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    opacity: 0.9,
  },
  letsHelpYou: {
    top: 41,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    width: 335,
  },
  text: {
    top: 277,
    left: 86,
  },
  onboard: {
    top: 20,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center'
  },
  frame: {
    height: 341,
    textAlign: "center"
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
  signIn: {
    color: Color.colorMediumturquoise_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  alreadyHaveAnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registration: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
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


const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRegister: (name, email, password) => dispatch(register(name, email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Registration)
