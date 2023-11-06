import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <View style={[styles.dashboardChild, styles.shapeIconPosition]} />
      <Image
        style={[styles.shapeIcon, styles.shapeIconPosition]}
        contentFit="cover"
        source={require("../assets/shape.png")}
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
      <Image
        style={styles.dashboardItem}
        contentFit="cover"
        source={require("../assets/ellipse-479.png")}
      />
      <Text style={[styles.welcomeMary, styles.tasksListTypo]}>
        Welcome Mary!
      </Text>
      <Text style={[styles.tasksList, styles.tasksListTypo]}>Tasks List</Text>
      <Image
        style={[styles.dashboardInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-162.png")}
      />
      <View style={styles.dailyTasksParent}>
        <Text style={[styles.dailyTasks, styles.dailyTasksTypo]}>
          Daily Tasks
        </Text>
        <Image
          style={[styles.plusCircleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/plus-circle.png")}
        />
        <View
          style={[styles.learnProgrammingBy12amParent, styles.parentPosition]}
        >
          <Text style={[styles.learnProgrammingBy, styles.dailyTasksTypo]}>
            Learn programming by 12am
          </Text>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
        <View style={[styles.haveLunchAt3pmParent, styles.parentPosition]}>
          <Text style={[styles.learnProgrammingBy, styles.dailyTasksTypo]}>
            Have lunch at 3pm
          </Text>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <View style={[styles.learnHowToCookBy1pmParent, styles.parentPosition]}>
          <Text style={[styles.learnProgrammingBy, styles.dailyTasksTypo]}>
            Learn how to cook by 1pm
          </Text>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <View style={[styles.goVisitMumBy4pmParent, styles.parentPosition]}>
          <Text style={[styles.learnProgrammingBy, styles.dailyTasksTypo]}>
            Go visit mum by4pm
          </Text>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <View style={[styles.pickUpTheKidsBy2pmParent, styles.parentPosition]}>
          <Text style={[styles.learnProgrammingBy, styles.dailyTasksTypo]}>
            Pick up the kids by 2pm
          </Text>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <View style={styles.frameChild2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shapeIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tasksListTypo: {
    opacity: 0.9,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  dailyTasksTypo: {
    color: Color.colorGray_300,
    opacity: 0.9,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  parentPosition: {
    height: 23,
    left: 21,
    position: "absolute",
  },
  frameLayout: {
    height: 17,
    width: 17,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 3,
    left: 0,
    position: "absolute",
  },
  dashboardChild: {
    backgroundColor: Color.colorMediumturquoise_100,
    width: 375,
    height: 292,
  },
  shapeIcon: {
    width: 254,
    height: 228,
  },
  wifiIcon: {
    right: "8.04%",
    left: "85.08%",
    bottom: "11.11%",
    top: "7.41%",
    width: "6.88%",
    height: "81.48%",
    maxWidth: "100%",
  },
  batteryThreeQuartersIcon: {
    right: "0%",
    left: "93.12%",
    bottom: "11.11%",
    top: "7.41%",
    width: "6.88%",
    height: "81.48%",
    maxWidth: "100%",
  },
  signalIcon: {
    right: "16.17%",
    left: "76.95%",
    bottom: "11.11%",
    top: "7.41%",
    width: "6.88%",
    height: "81.48%",
    maxWidth: "100%",
  },
  text: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  notification: {
    top: 8,
    width: 320,
    height: 27,
    left: 35,
    position: "absolute",
  },
  dashboardItem: {
    top: 134,
    left: 138,
    width: 100,
    height: 100,
    position: "absolute",
  },
  welcomeMary: {
    top: 244,
    color: Color.colorWhite,
    textAlign: "center",
    width: 305,
    left: 35,
  },
  tasksList: {
    top: 484,
    left: 20,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  dashboardInner: {
    height: "15.59%",
    width: "33.89%",
    top: "41.87%",
    right: "33.31%",
    bottom: "42.54%",
    left: "32.8%",
  },
  dailyTasks: {
    top: 12,
    fontSize: 17,
    left: 21,
  },
  plusCircleIcon: {
    height: "8.46%",
    width: "6.57%",
    top: "5.38%",
    right: "5.07%",
    bottom: "86.15%",
    left: "88.36%",
  },
  learnProgrammingBy: {
    left: 28,
    fontSize: FontSize.size_mini,
    top: 0,
    color: Color.colorGray_300,
  },
  frameChild: {
    backgroundColor: "#56c5b6",
  },
  learnProgrammingBy12amParent: {
    top: 63,
    width: 250,
  },
  frameItem: {
    backgroundColor: Color.colorWhite,
  },
  haveLunchAt3pmParent: {
    top: 162,
    width: 173,
  },
  learnHowToCookBy1pmParent: {
    top: 96,
    width: 225,
  },
  goVisitMumBy4pmParent: {
    top: 195,
    width: 189,
  },
  pickUpTheKidsBy2pmParent: {
    top: 129,
    width: 209,
  },
  frameChild2: {
    top: 73,
    left: 314,
    borderRadius: 3,
    backgroundColor: "#d9d9d9",
    width: 3,
    height: 96,
    position: "absolute",
  },
  dailyTasksParent: {
    top: 529,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 335,
    height: 260,
    backgroundColor: Color.colorWhite,
    left: 21,
    position: "absolute",
  },
  dashboard: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Dashboard;
