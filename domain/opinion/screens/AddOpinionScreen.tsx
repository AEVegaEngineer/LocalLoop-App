import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

const AnimatedView = Animated.View || View;

export const AddOpinionScreen = () => {
  return (
    <AnimatedView
      style={styles.container}
      entering={FadeIn.duration(500)}
      testID="opinion-container"
    >
      <Text>Add Your Opinion</Text>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
