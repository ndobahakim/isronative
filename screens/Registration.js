import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Registration = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registration}>
      <Pressable
        style={[styles.button, styles.text1Position]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={[styles.buttonChild, styles.childPosition]} />
        <Text style={[styles.getStarted, styles.textTypo]}>Register</Text>
      </Pressable>
      <Image
        style={[styles.shapeIcon, styles.shapeIconPosition]}
        contentFit="cover"
        source={require("../assets/shape1.png")}
      />
      <View style={styles.notification}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
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
        <Text style={[styles.text, styles.textTypo]}>9:41</Text>
      </View>
      <View style={[styles.text1, styles.text1Position]}>
        <Text style={[styles.welcomeOnboard, styles.textTypo]}>
          Welcome Onboard!
        </Text>
        <Text style={[styles.letsHelpYou, styles.letsHelpYouTypo]}>
          Lets help you in completing your tasks
        </Text>
      </View>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text2}>
          <Text
            style={styles.letsHelpYouTypo}
          >{`Already have an account ? `}</Text>
          <Text style={[styles.signIn, styles.textTypo]}>Sign In</Text>
        </Text>
      </Pressable>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.maryElliot, styles.fullNameTypo]}>
          Mary Elliot
        </Text>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Full name</Text>
      </View>
      <View style={[styles.input1, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.maryElliot, styles.fullNameTypo]}>
          mary.elliot@mail.com
        </Text>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Email</Text>
      </View>
      <View style={[styles.input2, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.maryElliot, styles.fullNameTypo]}>
          **************
        </Text>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Password</Text>
      </View>
      <View style={[styles.input3, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.childPosition]} />
        <Text style={[styles.maryElliot, styles.fullNameTypo]}>
          **************
        </Text>
        <Text style={[styles.fullName, styles.fullNameTypo]}>
          Confirm Password
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Position: {
    left: 20,
    width: 335,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  shapeIconPosition: {
    left: 0,
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
  letsHelpYouTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  inputLayout: {
    height: 73,
    width: 335,
    left: 20,
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
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
  },
  getStarted: {
    top: "25%",
    left: "37.31%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  button: {
    top: 668,
    height: 60,
    width: 335,
  },
  shapeIcon: {
    width: 254,
    height: 228,
    top: 0,
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
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  notification: {
    top: 8,
    left: 35,
    width: 320,
    height: 27,
    position: "absolute",
  },
  welcomeOnboard: {
    left: 17,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    width: 305,
    opacity: 0.9,
    top: 0,
    textAlign: "center",
    position: "absolute",
  },
  letsHelpYou: {
    top: 41,
    fontSize: FontSize.size_mini,
    left: 0,
    position: "absolute",
    textAlign: "center",
    width: 335,
  },
  text1: {
    top: 183,
    height: 64,
    width: 335,
  },
  signIn: {
    color: Color.colorMediumturquoise_100,
  },
  text2: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  alreadyHaveAnContainer: {
    left: 58,
    top: 738,
    position: "absolute",
  },
  inputChild: {
    height: "68.49%",
    top: "31.51%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
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
    top: 297,
  },
  input1: {
    top: 380,
  },
  input2: {
    top: 463,
  },
  input3: {
    top: 546,
  },
  registration: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Registration;
