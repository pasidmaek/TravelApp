import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SaveScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="chevron-back-outline" size={24} color="#FFA23D" />
        <View style={styles.actionbar}>
          <Icon name="search" size={24} color="#FFA23D" />
          <Icon name="filter" size={24} color="#FFA23D" />
        </View>
      </View>
      <Text>SaveScreen</Text>
    </View>
  );
};

export default SaveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionbar: {
    flexDirection: "row",
  },
});
