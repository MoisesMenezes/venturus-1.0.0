import { Container, Content, Item } from "./styles";

export function AverageModal(){
  return(
    <Container>
      <h4>Highest avg age</h4>
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