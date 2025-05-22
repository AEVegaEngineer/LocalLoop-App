import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ExploreStackParamList } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";

interface Business {
  id: string;
  title: string;
  description: string;
}

type ExploreScreenNavigationProp = NativeStackNavigationProp<
  ExploreStackParamList,
  "ExploreList"
>;

// Temporary fake data
const FAKE_DATA = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: i.toString(),
    title: `Business ${i}`,
    description: "Lorem ipsum dolor sit amet",
  }));

export const ExploreScreen = () => {
  const navigation = useNavigation<ExploreScreenNavigationProp>();

  const renderItem = ({ item }: { item: Business }) => (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate("BusinessDetail", { id: item.id })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlashList
        data={FAKE_DATA}
        renderItem={renderItem}
        estimatedItemSize={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
