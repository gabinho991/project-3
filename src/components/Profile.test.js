import { render, screen, fireEvent } from "@testing-library/react";
import Profile from "./Profile";
// import Social from "../src/components/SocialMedia"

test("Testing Edit Button", () => {
  render(<Profile />);
  const editButtonElement = screen.getByText("Edit Profile");
  expect(editButtonElement).toHaveStyle({ display: "block" });
  fireEvent.click(editButtonElement);
  expect(editButtonElement).toHaveStyle({ display: "none" });
});

// test("Testing Add Post Button on SocialMedia.js", () => {
//   render(<Social />);
// });
