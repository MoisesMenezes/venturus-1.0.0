import { Container, AveragePlayer, PlayerArea } from "./styles";

export function PickedPlayer() {
  return (
    <Container>
      <AveragePlayer>
        <h4>Most picked player</h4>
        <PlayerArea>
          <div className="dashed-avatar">
            <img
              src="https://avatarfiles.alphacoders.com/204/204796.jpg"
              alt="best Player"
            />
          </div>

          <strong>75%</strong>
        </PlayerArea>
      </AveragePlayer>
      <AveragePlayer>
        <h4>Less picked player</h4>
        <PlayerArea>
          <div className="solid-avatar">
            <img
              src="https://avatarfiles.alphacoders.com/204/204796.jpg"
              alt="best Player"
            />
          </div>

          <strong>75%</strong>
        </PlayerArea>
      </AveragePlayer>
    </Container>
  );
}
