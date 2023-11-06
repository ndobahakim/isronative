import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Text style={[styles.tasksList, styles.tasksListTypo]}>Tasks List</Text>
      <Image
        style={[styles.dashboardChild, styles.dashboardChildLayout]}
        contentFit="cover"
        source={require("../assets/group-162.png")}
      />
      <View style={styles.frame}>
        <View style={[styles.frameChild, styles.shapeIconPosition]} />
        <Image
          style={[styles.shapeIcon, styles.shapeIconPosition]}
          contentFit="cover"
          source={require("../assets/shape.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-479.png")}
        />
        <Text style={[styles.welcomeMary, styles.tasksListTypo]}>
          Welcome Mary!
        </Text>
      </View>
      <View style={[styles.frameParent, styles.parentPosition1]}>
        <View style={[styles.goVisitMumBy4pmParent, styles.parentPosition1]}>
          <Text style={[styles.goVisitMum, styles.goVisitMumTypo]}>
            Go visit mum by4pm
          </Text>
          <View style={[styles.frameInner, styles.frameInnerLayout]} />
        </View>
        <View style={[styles.frame1, styles.framePosition]}>
          <Text style={[styles.dailyTasks, styles.parentPosition]}>
            Daily Tasks
          </Text>
          <Image
            style={[styles.plusCircleIcon, styles.dashboardChildLayout]}
            contentFit="cover"
            source={require("../assets/plus-circle.png")}
          />
        </View>
        <View style={[styles.frame2, styles.framePosition]}>
          <View
            style={[styles.learnProgrammingBy12amParent, styles.parentPosition]}
          >
            <Text style={[styles.goVisitMum, styles.goVisitMumTypo]}>
              Learn programming by 12am
            </Text>
            <View style={[styles.rectangleView, styles.frameInnerLayout]} />
          </View>
          <View style={[styles.haveLunchAt3pmParent, styles.parentPosition]}>
            <Text style={[styles.goVisitMum, styles.goVisitMumTypo]}>
              Have lunch at 3pm
            </Text>
            <View style={[styles.frameInner, styles.frameInnerLayout]} />
          </View>
          <View
            style={[styles.learnHowToCookBy1pmParent, styles.parentPosition]}
          >
            <Text style={[styles.goVisitMum, styles.goVisitMumTypo]}>
              Learn how to cook by 1pm
            </Text>
            <View style={[styles.frameInner, styles.frameInnerLayout]} />
          </View>
          <View
            style={[styles.pickUpTheKidsBy2pmParent, styles.parentPosition]}
          >
            <Text style={[styles.goVisitMum, styles.goVisitMumTypo]}>
              Pick up the kids by 2pm
            </Text>
            <View style={[styles.frameInner, styles.frameInnerLayout]} />
          </View>
          <View style={styles.frameChild4} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tasksListTypo: {
    opacity: 0.9,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  dashboardChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shapeIconPosition: {
    left: 66,
    top: 94,
    position: "absolute",
  },
  parentPosition1: {
    left: 21,
    position: "absolute",
  },
  goVisitMumTypo: {
    color: Color.colorGray_300,
    top: 0,
    opacity: 0.9,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frameInnerLayout: {
    height: 17,
    width: 17,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 3,
    left: 0,
    position: "absolute",
  },
  framePosition: {
    width: 296,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  tasksList: {
    top: 484,
    left: 20,
    color: Color.colorGray_200,
    textAlign: "left",
    opacity: 0.9,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  dashboardChild: {
    height: "15.59%",
    width: "33.89%",
    top: "41.87%",
    right: "33.31%",
    bottom: "42.54%",
    left: "32.8%",
  },
  frameChild: {
    backgroundColor: Color.colorMediumturquoise_100,
    width: 375,
    height: 292,
  },
  shapeIcon: {
    width: 254,
    height: 228,
  },
  frameItem: {
    top: 228,
    left: 204,
    width: 100,
    height: 100,
    position: "absolute",
  },
  welcomeMary: {
    top: 338,
    left: 101,
    color: Color.colorWhite,
    textAlign: "center",
    width: 305,
    opacity: 0.9,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
  },
  frame: {
    top: -94,
    left: -66,
    width: 441,
    height: 386,
    position: "absolute",
    overflow: "hidden",
  },
  goVisitMum: {
    left: 28,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  frameInner: {
    backgroundColor: Color.colorWhite,
  },
  goVisitMumBy4pmParent: {
    top: 195,
    width: 189,
    height: 23,
  },
  dailyTasks: {
    fontSize: 17,
    color: Color.colorGray_300,
    top: 0,
    opacity: 0.9,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  plusCircleIcon: {
    height: "84.62%",
    width: "7.09%",
    top: "7.69%",
    right: "0%",
    bottom: "7.69%",
    left: "92.91%",
  },
  frame1: {
    top: 12,
    height: 26,
  },
  rectangleView: {
    backgroundColor: "#56c5b6",
  },
  learnProgrammingBy12amParent: {
    width: 250,
    top: 0,
    left: 0,
    height: 23,
  },
  haveLunchAt3pmParent: {
    top: 99,
    width: 173,
    height: 23,
  },
  learnHowToCookBy1pmParent: {
    top: 33,
    width: 225,
    height: 23,
  },
  pickUpTheKidsBy2pmParent: {
    top: 66,
    width: 209,
    height: 23,
  },
  frameChild4: {
    top: 10,
    left: 293,
    borderRadius: 3,
    backgroundColor: "#d9d9d9",
    width: 3,
    height: 96,
    position: "absolute",
  },
  frame2: {
    top: 63,
    height: 122,
  },
  frameParent: {
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
