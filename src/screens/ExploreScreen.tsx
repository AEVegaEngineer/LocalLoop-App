import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";

interface Business {
  id: string;
  title: string;
  description: string;
}
// Temporary fake data
const FAKE_DATA = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: i.toString(),
    title: `Business ${i}`,
    description: "Lorem ipsum dolor sit amet",
  }));

export const ExploreScreen = () => {
  const renderItem = ({ item }: { item: Business }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
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
