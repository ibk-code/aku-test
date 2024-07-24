import React from "react";
import {render, screen} from "@testing-library/react";
import SearchInput from ".";

test("Check if input is enabled", () => {
  const onClick = jest.fn();
  render(<SearchInput btnDisabled={false} searchDisabled={false} value="ibk-code" setValue={onClick}/>)
  const search = screen.getByDisplayValue("ibk-code")

  expect(search).toBeEnabled()
});

test("Check if button is disabled when input is empty", () => {
  const onClick = jest.fn();
  render(<SearchInput btnDisabled={true} searchDisabled={true} value="" setValue={onClick}/>)
  const search = screen.getAllByText("Search").find((ele) => ele.nodeName.toLowerCase() === "button")

  expect(search).toBeDisabled()
});