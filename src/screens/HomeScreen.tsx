import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import SmallCard from "../components/SmallCard";
import Icon from "react-native-vector-icons/Feather";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="search" size={24} color="#FFA23D" style={styles.icon} />
        <Icon name="bell" size={24} color="#FFA23D" style={styles.icon} />
      </View>
      <ScrollView style={styles.body}>
        <Text style={styles.title}>Today's Plans </Text>
        <SmallCard />
        <Text style={styles.title}>Discovery</Text>
        <View>
          <Text style={styles.head}>Recommended Place</Text>
          <Text style={styles.seeall}>see all</Text>
        </View>
        <SmallCard />
        <Text>Recommended Plan</Text>
        <SmallCard />
        <Text>Recommended User</Text>
        <SmallCard />
        <Text>Recommended User</Text>
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
  },
  body: {
    // height: SCREENHEIGHT / 1.8,
    // flexDirection: "row",
    margin: 4,
    marginVerticl: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 2,
  },
  head: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#9B9B9B",
  },
  seeall: {},
  footer: {
    // height: SCREENHEIGHT - SCREENHEIGHT / 3.5 - SCREENHEIGHT / 1.8,
    backgroundColor: "black",
  },
});
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
