import { Container, Content, Item } from "./styles";

interface AverageModalProps {
  title: string;
}

export function AverageModal({ title }:AverageModalProps){
  return(
    <Container>
      <h4>{title}</h4>
      <Content>
        <Item>
          <p>Inter Milan</p>
          <p>31.9</p>
        </Item>
        <Item>
          <p>APOEL Nicosia</p>
          <p>31.7</p>
        </Item>
      </Content>
    </Container>
  )
}