import Header from "../../components/Header";
import { ModalTeam } from "../../components/ModalTeam";
import { ModalTop } from "../../components/ModalTop";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <ModalTeam />
        <ModalTop/>
      </Container>
    </>
  );
}
