import { AverageModal } from "../AverageModal";
import { Container, Header } from "./styles";

export function ModalTop(){
  return(
    <Container>
      <Header>
        <h2>Top 5</h2>
      </Header>
      <AverageModal />
    </Container>
  )
}