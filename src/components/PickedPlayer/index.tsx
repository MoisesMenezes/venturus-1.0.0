import { Container, Avatar, Content } from "./styles";
import { Field } from "../../assets/Field";


export function PickedPlayer() {
  return (

    <Container>
      <Field/>
      <Content>
        <div />
      <Avatar>
          <h4>Most picked player</h4>
          <div className="dashed-avatar">
            <img
              src="https://avatarfiles.alphacoders.com/204/204796.jpg"
              alt="best Player"
            />
          </div>

          <strong>75%</strong>
        </Avatar>
        <div />
        <Avatar>
          <h4>Less picked player</h4>
          <div className="solid-avatar">
            <img
              src="https://avatarfiles.alphacoders.com/204/204796.jpg"
              alt="best Player"
            />
          </div>

          <strong>75%</strong>
        </Avatar>
      </Content>
    </Container>

  );
}
