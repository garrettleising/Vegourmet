import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  yellowGreen,
  chestnut,
  sapGreen,
  lincolnGreen,
  darkGreen,
} from "../../Colors";

const AboutScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.home}>
        <View style={styles.titleStatement}>
          <Text style={styles.mainTitle}>About</Text>
        </View>
        <View style={styles.missionStatement}>
          <Text style={styles.missionText}>
            Bacon ipsum dolor amet hamburger sirloin spare ribs prosciutto.
            Chicken shank alcatra doner meatball brisket picanha shoulder
            prosciutto kielbasa boudin pig capicola cow swine. Alcatra corned
            beef shankle, pancetta frankfurter burgdoggen strip steak shank
            kielbasa ribeye chicken turkey doner. Boudin picanha swine, pork
            chop leberkas strip steak burgdoggen beef ribs. Meatloaf spare ribs
            corned beef cow sausage turducken shank capicola
          </Text>
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
              source={require("../../images/home.png")}
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
    backgroundColor: sapGreen,
    height: 1300,
  },
  titleStatement: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
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
  missionStatement: {
    width: 325,
    backgroundColor: lincolnGreen,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  missionText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "san-serif",
    fontStyle: "italic",
    color: yellowGreen,
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

export default AboutScreen;
