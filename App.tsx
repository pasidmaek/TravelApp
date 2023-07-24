import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CreateScreen from "./src/screens/CreateScreen";
import SaveScreen from "./src/screens/SaveScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PlanScreen from "./src/screens/PlanScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Save") {
              iconName = focused ? "bookmark" : "bookmark-outline";
            } else if (route.name === "Create") {
              iconName = focused ? "create" : "create-outline";
            } else if (route.name === "Plan") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Save" component={SaveScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Plan" component={PlanScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarLabel: { fontSize: 20 },
});
