import { render, screen } from "@testing-library/react";

import Home from "./Home";

test("renders home page", () => {
  render(<Home />);

  const enterPage = screen.getByText(/enter/i);

  expect(enterPage).toBeInTheDocument();
});
