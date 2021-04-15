import { Container, Content } from "./styles";

export function PlayerCard() {
  return (
    <Container>
      <div>
        <Content>
          <p>Name:</p>
          <strong>Cristiano Ronaldo</strong>
        </Content>

        <Content>
          <p>Nacionality:</p>
          <strong>Portugal</strong>
        </Content>
      </div>
      <div>
        <Content>
          <p>Age:</p>
          <strong>32</strong>
        </Content>
      </div>
    </Container>
  );
}
