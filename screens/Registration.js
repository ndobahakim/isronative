import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Registration = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registration}>
      <View style={[styles.frame, styles.frameLayout1]}>
        <Image
          style={[styles.frameIcon, styles.frameLayout1]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={[styles.text, styles.textLayout]}>
          <Text style={[styles.welcomeOnboard, styles.getStartedTypo]}>
            Welcome Onboard!
          </Text>
          <Text style={[styles.letsHelpYou, styles.letsHelpYouTypo]}>
            Lets help you in completing your tasks
          </Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.textLayout]}>
        <View style={[styles.input, styles.inputLayout]}>
          <View style={styles.inputChild} />
          <View style={[styles.frame2, styles.frameLayout]}>
            <Text style={[styles.maryElliot, styles.text1Typo]}>
              Mary Elliot
            </Text>
          </View>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Text style={[styles.fullName, styles.fullNameClr]}>Full name</Text>
          </View>
        </View>
        <View style={[styles.input1, styles.inputLayout]}>
          <View style={styles.inputChild} />
          <View style={[styles.frame2, styles.frameLayout]}>
            <Text style={[styles.maryElliot, styles.text1Typo]}>
              mary.elliot@mail.com
            </Text>
          </View>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Text style={[styles.fullName, styles.fullNameClr]}>Email</Text>
          </View>
        </View>
        <View style={[styles.input2, styles.inputLayout]}>
          <View style={styles.inputChild} />
          <View style={[styles.frame2, styles.frameLayout]}>
            <Text style={[styles.maryElliot, styles.text1Typo]}>
              **************
            </Text>
          </View>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Text style={[styles.fullName, styles.fullNameClr]}>Password</Text>
          </View>
        </View>
        <View style={[styles.input3, styles.inputLayout]}>
          <View style={styles.inputChild} />
          <View style={[styles.frame2, styles.frameLayout]}>
            <Text style={[styles.maryElliot, styles.text1Typo]}>
              **************
            </Text>
          </View>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Text style={[styles.fullName, styles.fullNameClr]}>
              Confirm Password
            </Text>
          </View>
        </View>
        <View style={[styles.frame10, styles.frameLayout]}>
          <Pressable
            style={styles.alreadyHaveAnContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.text1Typo}>
              <Text
                style={styles.letsHelpYouTypo}
              >{`Already have an account ? `}</Text>
              <Text style={styles.signIn}>Sign In</Text>
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.button, styles.textLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={[styles.getStarted, styles.fullNameClr]}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    width: 421,
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    width: 335,
    position: "absolute",
  },
  getStartedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  letsHelpYouTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  inputLayout: {
    height: 73,
    left: 0,
    width: 335,
    position: "absolute",
  },
  frameLayout: {
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  fullNameClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  frameIcon: {
    top: 94,
    left: 66,
    height: 228,
  },
  welcomeOnboard: {
    left: 17,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    width: 305,
    opacity: 0.9,
    top: 0,
    position: "absolute",
  },
  letsHelpYou: {
    top: 41,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    textAlign: "center",
    width: 335,
    position: "absolute",
  },
  text: {
    top: 277,
    left: 86,
    height: 64,
  },
  frame: {
    top: -94,
    left: -66,
    height: 341,
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
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  frame2: {
    top: 36,
    width: 98,
    left: 0,
  },
  fullName: {
    left: "20.21%",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: "0%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frame3: {
    width: 94,
    left: 0,
    top: 0,
  },
  input: {
    top: 0,
  },
  input1: {
    top: 83,
  },
  input2: {
    top: 166,
  },
  input3: {
    top: 249,
  },
  signIn: {
    color: Color.colorMediumturquoise_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  alreadyHaveAnContainer: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame10: {
    top: 441,
    left: 38,
    width: 297,
  },
  getStarted: {
    top: "25%",
    left: "37.31%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  button: {
    top: 371,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumturquoise_100,
    height: 60,
    left: 0,
  },
  frame1: {
    top: 297,
    left: 20,
    height: 464,
    overflow: "hidden",
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
