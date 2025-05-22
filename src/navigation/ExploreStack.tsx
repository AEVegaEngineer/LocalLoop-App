import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreScreen } from "../screens/ExploreScreen";
import { BusinessDetailScreen } from "../screens/BusinessDetailScreen";
import { AddOpinionScreen } from "../screens/AddOpinionScreen";

const Stack = createNativeStackNavigator();

export const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExploreList" component={ExploreScreen} />
      <Stack.Screen
        name="BusinessDetail"
        component={BusinessDetailScreen}
        options={{
          presentation: "card",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen name="AddOpinion" component={AddOpinionScreen} />
    </Stack.Navigator>
  );
};
