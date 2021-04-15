import { Container, Avatar, Content } from "./styles";

export function PickedPlayer() {
  return (
    <Container>
      <Content>
        <Avatar>
          <h3>Most picked player</h3>
          <div className="dashed-avatar">
            <img
              src="https://avatarfiles.alphacoders.com/204/204796.jpg"
              alt="best Player"
            />
          </div>

          <strong>75%</strong>
        </Avatar>

        <Avatar>
          <h3>Less picked player</h3>
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
