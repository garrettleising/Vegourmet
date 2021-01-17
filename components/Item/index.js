import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
};

const chestnut = "#8c4b37";

const styles = StyleSheet.create({
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
      }
})

export default Item;