import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
// import { getFoodRepoToken, foodRepoParseName, foodRepoRequest } from "./Leo.js";

// Initialization---------------------------------------------
const Stack = createStackNavigator();

// var ids = ["0099482434366", "0646670317873", "0184706000042"];
// var token = getFoodRepoToken();
// var foodnames = foodRepoParseName(JSON.parse(foodRepoRequest(ids, token)));
var foodnames = ["Apple", "Banana", "Peach"];

// Colors--------------------
const chestnut = "#8c4b37";
const yellowGreen = "#d0d269";
const sapGreen = "#5c8326";
const lincolnGreen = "#1d5113";
const darkGreen = "#07331b";

// List Component---------------------------------------------

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const ListScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.MainContainer}>
        {foodnames.map((item, key) => (
          <Item key={item} title={item}></Item>
        ))}
      </ScrollView>
      <View style={styles.navbar}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
    </>
  );
};

// Home Component---------------------------------------------
const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.home}>
        <Text style={styles.mainTitle}>Vegourmet</Text>
        <View style={styles.missionStatement}>
          <Text style={styles.missionText}>
            Bacon ipsum dolor amet hamburger sirloin spare ribs prosciutto.
            Chicken shank alcatra doner meatball brisket picanha shoulder
            prosciutto kielbasa boudin pig capicola cow swine. Alcatra corned
            beef shankle, pancetta frankfurter burgdoggen strip steak shank
            kielbasa ribeye chicken turkey doner. Boudin picanha swine, pork
            chop leberkas strip steak burgdoggen beef ribs. Meatloaf spare ribs
            corned beef cow sausage turducken shank capicola drumstick salami.
            Tongue alcatra shoulder corned beef pork chop chuck. Sirloin shank
            tenderloin turkey cupim pastrami. Corned beef pig filet mignon, beef
            tail rump meatloaf doner venison chicken. Hamburger andouille cupim
            short ribs. Tri-tip bresaola tongue doner, shank biltong swine
            venison beef spare ribs porchetta pork ball tip kielbasa jerky. Pork
            loin short loin sausage, short ribs shank fatback chuck kevin
            pancetta bresaola pork belly brisket ribeye. Drumstick shoulder pork
            loin, tri-tip strip steak t-bone meatball ham hock beef picanha
            kielbasa turkey pancetta sausage chicken.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <Button title="List" onPress={() => navigation.navigate("List")} />
      </View>
    </>
  );
};

// Main App --------------------------------------------------
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: lincolnGreen,
          },
          headerTintColor: lincolnGreen,
          headerTitleStyle: {
            fontFamily: "san-serif",
            fontStyle: "italic",
            fontWeight: "bold",
            color: yellowGreen,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styling----------------------------------------------------
const styles = StyleSheet.create({
  container: {
    backgroundColor: yellowGreen,
  },
  MainContainer: {
    paddingTop: 12,
    backgroundColor: sapGreen,
    height: 1300,
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
  title: {
    fontSize: 32,
  },
  home: {
    display: "flex",
    alignItems: "center",
    backgroundColor: sapGreen,
    height: 1300,
  },
  mainTitle: {
    fontSize: 64,
    color: yellowGreen,
    fontFamily: "san-serif",
    fontStyle: "italic",
    marginTop: 12,
    marginBottom: 20,
  },
  missionText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "san-serif",
    fontStyle: "italic",
  },
  missionStatement: {
    width: 300,
    backgroundColor: chestnut,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  navbar: {
    width: "100%",
    height: 80,
    backgroundColor: lincolnGreen,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});

export default App;
