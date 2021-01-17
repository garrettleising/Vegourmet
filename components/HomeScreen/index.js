import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  yellowGreen,
  chestnut,
  sapGreen,
  lincolnGreen,
  darkGreen,
} from "../../Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.home}>
        <View style={styles.titleStatement}>
          <Image
            style={styles.logo}
            source={require("../../images/Vegourmet.png")}
          ></Image>
          <Text style={styles.mainTitle}>Vegourmet</Text>
          
        </View>
        <View style={styles.missionStatement}>
          <Text style={styles.missionText}>
            Scan. Find. Replace.
          </Text>
          <Text style={styles.missionText2}>Find healthy alternatives to your favorite foods instantly! Head to settings to configure what you are looking for, and then travel back here and press the camera icon to get started!</Text>
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <View style={styles.sideWhite}>
          <TouchableOpacity
            style={styles.side}
            onPress={() => navigation.navigate("About")}
            activeOpacity={0.75}
          >
            <Image
              style={styles.sideIcon}
              source={require("../../images/help-circle.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.white}>
          <TouchableOpacity
            style={styles.camera}
            onPress={() => navigation.navigate("Scan a barcode!")}
            activeOpacity={0.75}
          >
            <Image
              style={styles.mainIcon}
              source={require("../../images/camera.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.sideWhite}>
          <TouchableOpacity
            style={styles.side}
            onPress={() => navigation.navigate("About")}
            activeOpacity={0.75}
          >
            <Image
              style={styles.sideIcon}
              source={require("../../images/settings.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  home: {
    display: "flex",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: sapGreen,
    height: Dimensions.get("window").height - 80,
  },
  titleStatement: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 55,
    color: yellowGreen,
    fontFamily: "san-serif",
    fontStyle: "italic",
  },
  logo: {
    width: 63,
    height: 180,
    marginLeft: 15,
    resizeMode: "stretch",
  },
  missionStatement: {
    width: 325,
    backgroundColor: lincolnGreen,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  missionText: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "san-serif",
    fontStyle: "italic",
    color: yellowGreen,
    textAlign: "center"
  },
  missionText2: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "san-serif",
    fontStyle: "italic",
    color: yellowGreen,
    textAlign: "center"
  },
  navbar: {
    width: "100%",
    height: 80,
    backgroundColor: lincolnGreen,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: 15,
  },
  sideWhite: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 150,
    zIndex: 1,
  },
  side: {
    height: 50,
    width: 50,
    backgroundColor: darkGreen,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  sideIcon: {
    width: 25,
    height: 25,
    resizeMode: "stretch",
  },
  white: {
    height: 70,
    width: 70,
    backgroundColor: "#fff",
    borderRadius: 150,
    bottom: 30,
    zIndex: 1,
  },
  camera: {
    height: 70,
    width: 70,
    backgroundColor: darkGreen,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  mainIcon: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
  },
});

export default HomeScreen;
