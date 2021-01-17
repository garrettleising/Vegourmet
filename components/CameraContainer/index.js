import React from "react";
import { View, StyleSheet, ScrollView, Button } from "react-native";

import Camera from '../camera';

const CameraContainer = ({ navigation }) => {
    return (
      <>
        <ScrollView style={styles.MainContainer}>
          <Camera />
        </ScrollView>
        <View style={styles.navbar}>
          <Button title="List" onPress={() => navigation.navigate("List")} />
        </View>
      </>
    );
};

const sapGreen = "#5c8326";
const lincolnGreen = "#1d5113";

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

export default CameraContainer;