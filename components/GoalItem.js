import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});
