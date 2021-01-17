import React from "react";
import { View, StyleSheet, ScrollView, Button, Text, Dimensions, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const chestnut = "#8c4b37";
const yellowGreen = "#d0d269";
const sapGreen = "#5c8326";
const lincolnGreen = "#1d5113";

const HomeScreen = ( { navigation } ) => {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.home}>
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
          <Button title="List" onPress={() => navigation.navigate("Camera")} />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    home: {
      display: "flex",
      alignItems: 'center',
      backgroundColor: sapGreen,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
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

export default HomeScreen;