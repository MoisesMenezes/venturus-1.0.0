import { AverageModal } from "../AverageModal";
import { Container, Header,ContainerAverage } from "./styles";

export function ModalTop(){
  return(
    <Container>
      <Header>
        <h2>Top 5</h2>
      </Header>
      <ContainerAverage>
      <AverageModal/>
      <AverageModal/>

      </ContainerAverage>
    </Container>
  )
}