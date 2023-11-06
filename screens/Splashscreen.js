import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splashscreen}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={[styles.buttonChild, styles.text1Position]} />
        <Text style={[styles.getStarted, styles.text1Typo]}>Get Started</Text>
      </Pressable>
      <View style={styles.text}>
        <Text style={[styles.getThingsDone, styles.shapeIconPosition]}>
          Get things done with TODO
        </Text>
        <Text style={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          gravida purus id eu condimentum est diam quam. Condimentum blandit
          diam.
        </Text>
      </View>
      <Image
        style={styles.undrawMobileUxRe59hr1Icon}
        contentFit="cover"
        source={require("../assets/undraw-mobile-ux-re-59hr-1.png")}
      />
      <Image
        style={[styles.shapeIcon, styles.shapeIconPosition]}
        contentFit="cover"
        source={require("../assets/shape2.png")}
      />
      <View style={styles.notification}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={[styles.batteryThreeQuartersIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/batterythreequarters1.png")}
        />
        <Image
          style={[styles.signalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signal1.png")}
        />
        <Text style={[styles.text1, styles.text1Typo]}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Position: {
    left: "0%",
    top: "0%",
  },
  text1Typo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  shapeIconPosition: {
    left: 0,
    top: 0,
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
  buttonChild: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumturquoise_100,
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  getStarted: {
    top: "25%",
    left: "32.54%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  button: {
    top: 668,
    left: 20,
    width: 335,
    height: 60,
    position: "absolute",
  },
  getThingsDone: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    opacity: 0.9,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 0,
  },
  loremIpsumDolor: {
    top: 38,
    left: 29,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_300,
    width: 243,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    top: 404,
    left: 37,
    width: 301,
    height: 153,
    position: "absolute",
  },
  undrawMobileUxRe59hr1Icon: {
    top: 164,
    left: 93,
    width: 187,
    height: 170,
    position: "absolute",
    overflow: "hidden",
  },
  shapeIcon: {
    width: 254,
    height: 228,
  },
  wifiIcon: {
    right: "8.04%",
    left: "85.08%",
  },
  batteryThreeQuartersIcon: {
    left: "93.12%",
    right: "0%",
  },
  signalIcon: {
    right: "16.17%",
    left: "76.95%",
  },
  text1: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "0%",
    top: "0%",
  },
  notification: {
    top: 8,
    left: 35,
    width: 320,
    height: 27,
    position: "absolute",
  },
  splashscreen: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splashscreen;
