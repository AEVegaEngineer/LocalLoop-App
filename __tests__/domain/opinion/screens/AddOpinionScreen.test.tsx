import React from "react";
import { render } from "@testing-library/react-native";
import { AddOpinionScreen } from "../../../../domain/opinion/screens/AddOpinionScreen";

describe("AddOpinionScreen", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<AddOpinionScreen />);
    expect(getByText("Add Your Opinion")).toBeTruthy();
  });

  it("renders with the correct styles", () => {
    const { getByTestId } = render(<AddOpinionScreen />);
    const container = getByTestId("opinion-container");

    expect(container.props.style).toMatchObject({
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    });
  });
});
