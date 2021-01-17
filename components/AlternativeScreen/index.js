import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  yellowGreen,
  chestnut,
  sapGreen,
  lincolnGreen,
  darkGreen,
} from "../../Colors";

const AlternativeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.diet}>
        <View style={styles.titleStatement}>
          <Text style={styles.mainTitle}>Alternative</Text>
        </View>
        <View style={styles.dietBox}>
          <View style={styles.altItem}>
            <Text style={styles.altTitle}>Scanned Item:</Text>
          </View>
          <View style={styles.altItem}>
            <Text style={styles.altName}>Item</Text>
          </View>
        </View>
        <Image
          style={styles.arrowIcon}
          source={require("./arrow-down.png")}
        ></Image>
        <View style={styles.dietBox}>
          <View style={styles.altItem}>
            <Text style={styles.altTitle}>Alternative Item:</Text>
          </View>
          <View style={styles.altItem}>
            <Text style={styles.altName}>Item</Text>
          </View>
        </View>
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
              source={require("./home.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

var foodnames = ["Apple", "Banana", "Peach"];

const styles = StyleSheet.create({
  container: {
    backgroundColor: yellowGreen,
  },
  MainContainer: {
    paddingTop: 12,
    backgroundColor: sapGreen,
    height: 1300,
  },
  teamImage: {
    height: 170,
    width: 300,
    resizeMode: "stretch",
    borderRadius: 30,
    marginBottom: 10,
  },
  camera: {
    height: 70,
    width: 70,
    backgroundColor: darkGreen,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  altTitle: {
    height: 32,
    color: yellowGreen,
    fontSize: 32,
  },
  altName: {
    height: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    fontFamily: "san-serif",
    color: yellowGreen,
    fontSize: 20,
  },
  white: {
    height: 70,
    width: 70,
    backgroundColor: "#fff",
    borderRadius: 150,
    bottom: 30,
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
  sideWhite: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 150,
    zIndex: 1,
  },
  mainIcon: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
  },
  arrowIcon: {
    width: 100,
    height: 100,
    margin: 40,
    resizeMode: "stretch",
  },
  sideIcon: {
    width: 25,
    height: 25,
    resizeMode: "stretch",
  },
  logo: {
    width: 63,
    height: 180,
    marginLeft: 15,
    resizeMode: "stretch",
  },
  item: {
    backgroundColor: chestnut,
    height: 150,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 20,
  },
  dietItem: {
    display: "flex",
    flexDirection: "row",
    height: 90,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  altItem: {
    display: "flex",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
  },
  home: {
    display: "flex",
    alignItems: "center",
    backgroundColor: sapGreen,
    height: 1300,
  },
  dietName: {
    fontSize: 24,
    color: yellowGreen,
  },
  diet: {
    display: "flex",
    alignItems: "center",
    backgroundColor: sapGreen,
    height: 2200,
  },
  mainTitle: {
    fontSize: 55,
    color: yellowGreen,
    fontFamily: "san-serif",
    fontStyle: "italic",
  },
  missionText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "san-serif",
    fontStyle: "italic",
    color: yellowGreen,
  },
  teamText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "san-serif",
    color: yellowGreen,
    marginTop: 10,
  },
  missionStatement: {
    width: 350,
    backgroundColor: lincolnGreen,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  teamStatement: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    backgroundColor: lincolnGreen,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  dietBox: {
    width: 350,
    backgroundColor: lincolnGreen,
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  titleStatement: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
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
  missionText2: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "san-serif",
    fontStyle: "italic",
    color: yellowGreen,
    textAlign: "center",
  },
});

export default AlternativeScreen;
