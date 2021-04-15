import { Container, Content, Avatar, Logo } from "./styles";
import logo from "../../assets/logo.svg";

export function Dashboard() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logo" />
          <h2>Squad Management Tool</h2>
        </Logo>

        <Avatar>
          <p>John Doe</p>
          <div>
            <strong>JD</strong>
          </div>
        </Avatar>
      </Content>
    </Container>
  );
}
