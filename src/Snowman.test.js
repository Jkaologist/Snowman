import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

describe("image gallow", function () {
  it ("displays 7th wrong guess incorrectly", function () {
    const { container } = render(<Snowman num_wrong={6}/>);
    expect(
      container.querySelector()
    ).toBeInTheDocument();
    fireEvent.click("z")
    expect(
      container.querySelector()
    ).not.toBeInTheDocument();
  })
})