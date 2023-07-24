import React from "react";
import { Text, StatusBar, Platform, View, StyleSheet } from "react-native";

const PlanScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PlanScreen</Text>
    </View>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
