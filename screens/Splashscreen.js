import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splashscreen}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={[styles.getStarted, styles.getTypo]}>Get Started</Text>
      </Pressable>
      <View style={styles.text}>
        <Text style={[styles.getThingsDone]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  getTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "center",
  },
  shapeIconPosition: {
    position: "absolute",
    top: -60,
    left: -60
  },
  getStarted: {
    top: "25%",
    left: "32.54%",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    height: "7.39%",
    width: "89.33%",
    top: "82.27%",
    right: "5.33%",
    bottom: "10.34%",
    left: "5.33%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumturquoise_100,
    position: "absolute",
  },
  getThingsDone: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_200,
    opacity: 0.9,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
    width: 200,
    height: 180,
  },
  splashscreen: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Splashscreen;
