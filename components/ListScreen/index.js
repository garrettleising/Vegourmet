import React from "react";
import { View, StyleSheet, ScrollView, Button } from "react-native";
import Item from '../Item';

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

const sapGreen = "#5c8326";
const lincolnGreen = "#1d5113";
var foodnames = ["Apple", "Banana", "Peach"];

const styles = StyleSheet.create({
    MainContainer: {
        paddingTop: 12,
        backgroundColor: sapGreen,
        height: 1300,
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
})

export default ListScreen;