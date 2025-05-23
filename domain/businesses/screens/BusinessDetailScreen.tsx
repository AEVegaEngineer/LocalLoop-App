import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ExploreStackParamList } from "../../../app/navigation/types";

type BusinessDetailScreenNavigationProp = NativeStackNavigationProp<
  ExploreStackParamList,
  "BusinessDetail"
>;

type BusinessDetailScreenRouteProp = RouteProp<
  ExploreStackParamList,
  "BusinessDetail"
>;

export const BusinessDetailScreen = () => {
  const navigation = useNavigation<BusinessDetailScreenNavigationProp>();
  const route = useRoute<BusinessDetailScreenRouteProp>();
  const { id } = route.params;

  return (
    <Animated.View style={styles.container} entering={FadeIn.duration(500)}>
      <Text>Business Detail Screen</Text>
      <Text>Business ID: {id}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("AddOpinion", { businessId: id })}
      >
        <Text style={styles.buttonText}>Add Opinion</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
