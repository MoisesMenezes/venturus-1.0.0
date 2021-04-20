import {
  render,
} from "@testing-library/react";
import { ModalTeam } from "./index";
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'

describe("<ModalTeam/>", () => {
  const history = createBrowserHistory();
  const Element = () => (
    <Router history={history}>
      <ModalTeam />
    </Router>
  ) 

  it("should render the element", () => {
    const { container  }  = render(<Element />);
    expect(container).toBeTruthy();
  })

})