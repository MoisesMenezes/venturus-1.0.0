import { Container, Header } from "./styles";
import { MdAdd} from "react-icons/md";
import { TableTeam } from "../TableTeam";
import {Link} from "react-router-dom";

export function ModalTeam(){
  return (
    <Container>
      <Header>
      <h2>My Teams</h2>
      <button>
        <Link to="/teamcreate" data-testid="link-navigate">
          <MdAdd size={28} color="#fff" />
        </Link>
      </button>
      </Header>
      <TableTeam />
    </Container>
  )
}