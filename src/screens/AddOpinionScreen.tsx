import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export const AddOpinionScreen = () => {
  return (
    <Animated.View style={styles.container} entering={FadeIn.duration(500)}>
      <Text>Add Your Opinion</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
