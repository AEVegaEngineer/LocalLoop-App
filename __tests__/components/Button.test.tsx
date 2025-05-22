import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../../src/components/Button";

describe("Button", () => {
  it("renders correctly with given title", () => {
    const { getByText } = render(
      <Button title="Press Me" onPress={() => {}} />
    );
    expect(getByText("Press Me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Press Me" onPress={onPressMock} />
    );

    fireEvent.press(getByText("Press Me"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
