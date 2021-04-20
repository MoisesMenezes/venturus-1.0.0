import {
  render,
} from "@testing-library/react";

import { TableTeam } from "./index";

describe("<TableTeam />", () => {
  it("should render element", async () => {
    const {container} = render(<TableTeam />);

    expect(container).toBeTruthy();
  })
})