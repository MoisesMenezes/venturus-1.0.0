import { Container, Content, Avatar, Logo } from "./styles";
import logo from "../../assets/logo.svg";

export default function Header(){
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logo" />
          <h4>Squad Management Tool</h4>
        </Logo>

        <Avatar>
          <p>Moisés Menezes</p>
          <div>
            <strong>MM</strong>
          </div>
        </Avatar>
      </Content>
    </Container>
  );
}