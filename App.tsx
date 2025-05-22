import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ExploreStack } from "./src/navigation/ExploreStack";
import { MapScreen } from "./src/screens/MapScreen";
import { FavoritesScreen } from "./src/screens/FavoritesScreen";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator>
          <Tab.Screen
            name="Explore"
            component={ExploreStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
