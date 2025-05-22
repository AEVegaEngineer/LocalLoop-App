import React from "react";
import { render, screen } from "@testing-library/react-native";
import App from "../App";

describe("App", () => {
  it("renders the welcome message", () => {
    render(<App />);
    const welcomeMessage = screen.getByText("LocalLoop");
    expect(welcomeMessage).toBeTruthy();
  });
});
