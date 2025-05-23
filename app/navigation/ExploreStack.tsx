import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreScreen } from "../../domain/businesses/screens/ExploreScreen";
import { BusinessDetailScreen } from "../../domain/businesses/screens/BusinessDetailScreen";
import { AddOpinionScreen } from "../../domain/opinion/screens/AddOpinionScreen";

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
