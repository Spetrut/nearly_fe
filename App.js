import React from "react";
import {StyleSheet, View} from "react-native";
import Home from "./src/scenes/home/home";
import Welcome from "./src/scenes/authentication/welcome/welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
