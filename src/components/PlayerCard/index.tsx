import { Container, Content } from "./styles";

interface PlayerCardProps {
  name: string;
  age: number;
  nacionality: string;
}

export function PlayerCard({ name, age, nacionality}: PlayerCardProps) {
  return (
    <Container>
      <div>
        <Content>
          <p>Name:</p>
          <strong>{name}</strong>
        </Content>

        <Content>
          <p>Nacionality:</p>
          <strong>{nacionality}</strong>
        </Content>
      </div>
      <div>
        <Content>
          <p>Age</p>
          <strong>{age}</strong>
        </Content>
      </div>
    </Container>
  );
}
