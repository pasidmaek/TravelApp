import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Icon } from "@rneui/themed";
import Tag from "./Tag";

const Smallcard = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.image}>
        <Image source={require("../../assets/place.png")} />
        <TouchableOpacity style={styles.star}>
          <Button />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>องค์พระปฐมเจดีย์</Text>
        <Text style={styles.location}>นครปฐม</Text>
        <View style={styles.tagbar}>
          <Tag />
          <Tag />
          <Tag />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    overflow: "hidden",
    shadowRadius: 40,
    shadowColor: "#000000",
    margin: 10,
    alignSelf: "flex-start",
    width: 175,
  },
  image: {
    width: 175,
    height: 175,
    backgroundColor: "#f5f5f5",
  },
  container: {
    margin: 5,
  },
  title: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  location: {
    marginTop: 3,
    fontSize: 10,
    color: "black",
  },
  tagbar: {
    display: "flex",
    flexDirection: "row",
  },
  bookmark: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    width: 25,
    height: 25,
    right: 5,
    top: 5,
  },
  star: {
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  containertag: {
    marginRight: 1,
    marginTop: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 50,
    width: 45,
    height: 15,
  },
  titletag: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Smallcard;
