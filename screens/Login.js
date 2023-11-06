import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={[styles.getStarted, styles.getStartedTypo]}>Login</Text>
      </Pressable>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape1.png")}
      />
      <Text style={[styles.welcomeBack, styles.getStartedTypo]}>
        Welcome Back!
      </Text>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={styles.textTypo}>
          <Text style={styles.dontHaveAn}>{`Don’t have an account ? `}</Text>
          <Text style={styles.signUpTypo}>Sign Up</Text>
        </Text>
      </Pressable>
      <Text style={[styles.forgotPassword, styles.signUpTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={styles.inputChild} />
        <View style={[styles.frame, styles.framePosition]}>
          <Text style={[styles.maryElliot, styles.fullNameTypo]}>
            mary.elliot@mail.com
          </Text>
        </View>
        <View style={[styles.frame1, styles.framePosition]}>
          <Text style={[styles.fullName, styles.fullNameTypo]}>Email</Text>
        </View>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={styles.inputChild} />
        <View style={[styles.frame, styles.framePosition]}>
          <Text style={[styles.maryElliot, styles.fullNameTypo]}>
            **************
          </Text>
        </View>
        <View style={[styles.frame1, styles.framePosition]}>
          <Text style={[styles.fullName, styles.fullNameTypo]}>Password</Text>
        </View>
      </View>
      <Image
        style={styles.undrawAccessAccountRe8spmIcon}
        contentFit="cover"
        source={require("../assets/undraw-access-account-re-8spm-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  signUpTypo: {
    color: Color.colorMediumturquoise_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  inputLayout: {
    height: 73,
    left: 19,
    width: 335,
    position: "absolute",
  },
  framePosition: {
    height: 23,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  fullNameTypo: {
    top: "0%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  getStarted: {
    top: "25%",
    left: "41.49%",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  button: {
    top: 668,
    left: 20,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumturquoise_100,
    height: 60,
    width: 335,
    position: "absolute",
  },
  shapeIcon: {
    width: 254,
    height: 228,
    left: 0,
    top: 0,
    position: "absolute",
  },
  welcomeBack: {
    top: 134,
    left: 34,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    width: 305,
    opacity: 0.9,
  },
  dontHaveAn: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  dontHaveAnContainer: {
    left: 65,
    top: 738,
    position: "absolute",
  },
  forgotPassword: {
    top: 579,
    left: 207,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  inputChild: {
    height: "68.49%",
    top: "31.51%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  maryElliot: {
    left: "19.39%",
    color: Color.colorGray_100,
  },
  frame: {
    top: 36,
    width: 98,
  },
  fullName: {
    left: "20.21%",
    color: Color.colorBlack,
  },
  frame1: {
    width: 94,
    top: 0,
    height: 23,
  },
  input: {
    top: 413,
  },
  input1: {
    top: 496,
  },
  undrawAccessAccountRe8spmIcon: {
    top: 200,
    left: 97,
    width: 180,
    height: 180,
    position: "absolute",
    overflow: "hidden",
  },
  login: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
