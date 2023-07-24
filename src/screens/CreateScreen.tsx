import { Button } from "@rneui/themed";
import React from "react";
import {
  Text,
  StatusBar,
  Platform,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "tailwind-react-native-classnames";

const CreateScreen = () => {
  const [planName, onChangePlanName] = React.useState("Travel");
  const [from, onChangeFrom] = React.useState("");
  const [to, onChangeTo] = React.useState("");
  return (
    <View
      style={styles.container}
    >
      <View style={styles.header}>
        <Icon name="close" />
        <Text>Create Plan</Text>
        <Text></Text>
      </View>
      <Text>Plan name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePlanName}
        value={planName}
      ></TextInput>
      <Text>Where</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeFrom}
        value={from}
        placeholder="From"
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTo}
        value={to}
        placeholder="To"
      ></TextInput>
      <Text>When</Text>
      <TouchableOpacity
        style={[tw`bottom-5 right-5`, { position: "absolute" }]}
      >
        <Button>Next</Button>
      </TouchableOpacity>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
