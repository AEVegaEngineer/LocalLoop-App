import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-reanimated";
import { Button } from "./src/components/Button";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <View style={styles.container}>
      <Text>LocalLoop</Text>
      <StatusBar style="auto" />
      <Button title="Increment" onPress={increment} />
      <Text>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
