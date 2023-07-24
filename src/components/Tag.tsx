import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Tag = () => {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>นครปฐม</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "orange",
    borderRadius: 50,
    marginVertical: 3,
    marginHorizontal: 2,
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: 10,
    marginVertical: 2,
    marginHorizontal: 5,
  },
});
