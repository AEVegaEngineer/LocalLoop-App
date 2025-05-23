module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^react-native/Libraries/Animated/NativeAnimatedHelper$":
      "<rootDir>/__mocks__/NativeAnimatedHelper.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|react-native-reanimated)",
  ],
};
