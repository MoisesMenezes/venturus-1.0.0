import Header from "../../components/Header";
import { ModalTeam } from "../../components/ModalTeam";
import { ModalTop } from "../../components/ModalTop";
import { PickedPlayer } from "../../components/PickedPlayer";
import { Container } from "./styles";

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <ModalTeam />
        <div>
          <ModalTop />
          <PickedPlayer />
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
