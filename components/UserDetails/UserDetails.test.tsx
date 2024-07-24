import React from "react";
import {render, screen} from "@testing-library/react";
import UserDetail from ".";

test("Check If user Image render", () => {
  render(<UserDetail img="https://avatars.githubusercontent.com/u/42596376?v=4" name="Ibk-code" type="User" />)
  const user = screen.getByAltText("User Avatar")

  expect(user).toBeInTheDocument()
})

test("Check If user type is valid", () => {
  render(<UserDetail img="https://avatars.githubusercontent.com/u/42596376?v=4" name="Ibk-code" type="Organisation" />)
  const userType = screen.getByText("type: Organisation")

  expect(userType).toBeInstanceOf(HTMLSpanElement)
})