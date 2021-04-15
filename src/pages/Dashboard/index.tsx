import Header from "../../components/Header";
import { ModalTeam } from "../../components/ModalTeam";
import { ModalTop } from "../../components/ModalTop";
import { PickedPlayer } from "../../components/PickedPlayer";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <ModalTeam />
        <ModalTop/>
        <PickedPlayer />
      </Container>
    </>
  );
}
