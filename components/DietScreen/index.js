import React, { useState } from "react";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import {
  yellowGreen,
  chestnut,
  sapGreen,
  lincolnGreen,
  darkGreen,
} from "../../Colors";

const allergies = [
  "mollusc_allergy",
  "mustard_allergy",
  "sesame_allergy",
  "gluten_allergy",
  "lactose_intolerance",
  "soy_allergy",
  "egg_allergy",
  "fish_allergy",
  "celergy_allergy",
  "crustacean_allergy",
  "peanut_allergy",
  "tree_nut_allergy",
  "wheat_allergy",
  "lupin_allergy",
  "milk_allergy",
];

let dietState = "vegan";
let allergyState = [];

const DietScreen = ({ navigation }) => {
  function dietString(name) {
    const newDiet = name;
    setDiet(newDiet);
    dietState = newDiet;
    console.log(newDiet);
  }

  function allergyArray(name) {
    const newallergyArray = new Array();
    for (let x of allergy) {
      newallergyArray.push(x);
    }
    if (allergy.indexOf(name) === -1) {
      newallergyArray.push(name);
    } else {
      newallergyArray.splice(newallergyArray.indexOf(name), 1);
    }
    setAllergy(newallergyArray);
    allergyState = newallergyArray;
    console.log(newallergyArray);
  }

  const [diet, setDiet] = useState(dietState);
  const [allergy, setAllergy] = useState(allergyState);

  return (
    <>
      <ScrollView contentContainerStyle={styles.diet}>
        <View style={styles.titleStatement}>
          <Text style={styles.mainTitle}>Diet</Text>
        </View>
        <View style={styles.dietBox}>
          <View style={styles.dietItem}>
            <Text style={styles.dietName}>Vegan (All Natural)</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              value={"vegan" === diet}
              onValueChange={() => dietString("vegan")}
            />
          </View>
          <View style={styles.dietItem}>
            <Text style={styles.dietName}>Vegetarian (No Meat)</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              value={"vegetarian" === diet}
              onValueChange={() => dietString("vegetarian")}
            />
          </View>
          <View style={styles.dietItem}>
            <Text style={styles.dietName}>Pescetarian (Fish)</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              value={"pescetarian" === diet}
              onValueChange={() => dietString("pescetarian")}
            />
          </View>
        </View>
        <View style={styles.titleStatement}>
          <Text style={styles.mainTitle}>Allergies</Text>
        </View>
        <View style={styles.dietBox}>
          {allergies.map((item, key) => (
            <View key={key} style={styles.dietItem}>
              <Text style={styles.dietName}>{item}</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                ios_backgroundColor="#3e3e3e"
                value={allergy.indexOf(item) > -1}
                onValueChange={() => allergyArray(item)}
              />
            </View>
          ))}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: yellowGreen,
  },
  MainContainer: {
    paddingTop: 12,
    backgroundColor: sapGreen,
    height: 1300,
  },
  camera: {
    height: 70,
    width: 70,
    backgroundColor: darkGreen,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 18,
    fontFamily: "san-serif",
    fontStyle: "italic",
    color: yellowGreen,
  },
  missionStatement: {
    width: 325,
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
    marginBottom: 20,
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

export default DietScreen;
