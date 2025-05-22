import "react-native-reanimated";

// Mock expo-status-bar
jest.mock("expo-status-bar", () => ({
  StatusBar: () => "StatusBar",
}));
