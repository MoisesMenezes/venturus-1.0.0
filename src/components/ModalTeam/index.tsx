import { Container, Header } from "./styles";
import { MdAdd} from "react-icons/md";
import { TableTeam } from "../TableTeam";

export function ModalTeam(){
  return (
    <Container>
      <Header>
      <h2>My Teams</h2>
      <button>
        <MdAdd size={28} color="#fff" />
      </button>
      </Header>
      <TableTeam />
    </Container>
  )
}