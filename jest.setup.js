jest.mock("react-native-reanimated", () => {
  const View = require("react-native").View;
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};

  return {
    View,
    FadeIn: {
      duration: () => ({ duration: 500 }),
    },
    createAnimatedComponent: () => View,
    ...Reanimated,
    default: {
      ...Reanimated.default,
      View: require("react-native").View,
    },
  };
});

// RN ≥ 0.79 removed NativeAnimatedHelper from the public JS bundle.
// Provide a tiny stub so Jest doesn't attempt to resolve the old file path.
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper", () => ({}));
