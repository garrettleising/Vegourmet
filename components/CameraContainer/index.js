import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
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

import Camera from "../camera";

const CameraContainer = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.MainContainer}>
        <Camera />
      </ScrollView>
      <View style={styles.navbar}>
        <View style={styles.white}>
          <TouchableOpacity
            style={styles.camera}
            onPress={() => navigation.navigate("Home")}
            activeOpacity={0.75}
          >
            <Image
              style={styles.mainIcon}
              source={require("../../images/home.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: sapGreen,
    height: Dimensions.get("window").height - 80,
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

export default CameraContainer;
