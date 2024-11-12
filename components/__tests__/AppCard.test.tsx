import React from "react";
import { render } from "@testing-library/react-native";
import AppCard from "../AppCard";

const mockEvent = {
  id: "1",
  title: "Sample Event",
  date: "2024-11-12",
  description: "A sample event description.",
  location: "Sample Location",
};

describe("AppCard Component", () => {
  it("renders the event information correctly", async () => {
    const { getByText } = render(<AppCard cardInfo={mockEvent} />);

    expect(getByText("Sample Event")).toBeTruthy();
    expect(getByText("A sample event description.")).toBeTruthy();
    expect(getByText("Sample Location")).toBeTruthy();
    expect(getByText("2024-11-12")).toBeTruthy();
  });
});
