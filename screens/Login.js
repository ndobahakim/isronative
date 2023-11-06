import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
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
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={[styles.getStarted, styles.getStartedTypo]}>Login</Text>
      </Pressable>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape1.png")}
      />
      <View style={styles.notification}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.batteryThreeQuartersIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/batterythreequarters.png")}
        />
        <Image
          style={[styles.signalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signal.png")}
        />
        <Text style={styles.text}>9:41</Text>
      </View>
      <Text style={[styles.welcomeBack, styles.getStartedTypo]}>
        Welcome Back!
      </Text>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={styles.text1Typo}>
          <Text style={styles.dontHaveAn}>{`Don’t have an account ? `}</Text>
          <Text style={styles.signUpTypo}>Sign Up</Text>
        </Text>
      </Pressable>
      <Text style={[styles.forgotPassword, styles.signUpTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.maryElliot, styles.fullNameTypo]}>
          mary.elliot@mail.com
        </Text>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Email</Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.maryElliot, styles.fullNameTypo]}>
          **************
        </Text>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Password</Text>
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
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  getStartedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "11.11%",
    top: "7.41%",
    width: "6.88%",
    height: "81.48%",
    position: "absolute",
    overflow: "hidden",
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
  fullNameTypo: {
    left: "5.67%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumturquoise_100,
    top: "0%",
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
    height: 60,
    width: 335,
    position: "absolute",
  },
  shapeIcon: {
    top: 0,
    left: 0,
    width: 254,
    height: 228,
    position: "absolute",
  },
  wifiIcon: {
    right: "8.04%",
    left: "85.08%",
  },
  batteryThreeQuartersIcon: {
    left: "93.12%",
    right: "0%",
    maxWidth: "100%",
    bottom: "11.11%",
    top: "7.41%",
    width: "6.88%",
    height: "81.48%",
  },
  signalIcon: {
    right: "16.17%",
    left: "76.95%",
  },
  text: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  notification: {
    top: 8,
    left: 35,
    width: 320,
    height: 27,
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
  text1Typo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  dontHaveAnContainer: {
    left: 65,
    top: 738,
    position: "absolute",
  },
  forgotPassword: {
    top: 579,
    left: 207,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  inputChild: {
    height: "68.49%",
    top: "31.51%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  maryElliot: {
    top: "49.32%",
    color: Color.colorGray_100,
  },
  fullName: {
    color: Color.colorBlack,
    top: "0%",
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
