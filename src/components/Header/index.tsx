import { Container, Content, Avatar, Logo } from "./styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
          
          <img src={logo} alt="logo" />
          </Link>
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