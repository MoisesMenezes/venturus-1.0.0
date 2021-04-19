import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Content, Item } from "./styles";
import { TeamProps } from "../../types";

interface TeamAvgProps {
  name: string;
  avg: number;
}

export function AverageModal() {
  const [teams, setTeams] = useState<TeamProps[]>([]);
  const [avgHighest, setAvgHighest] = useState<TeamAvgProps[]>([]);
  const [avgLowest, setAvgLowest] = useState<TeamAvgProps[]>([]);

  useEffect(() => {
    api.get("teams").then((response) => setTeams(response.data.teams));
  }, []);

  useEffect(() => {
    handleAvgTeams();
  }, [teams]);

  const handleAvgTeams = () => {
    let allTeams: TeamAvgProps[] = [];

    teams.map((team) => {
      let avg = 0;

      team.players.map((player) => {
        return (avg = player.age + avg);
      });

      const avgAge = (avg / team.players.length).toFixed(1);
      allTeams.push({
        name: team.name,
        avg: Number(avgAge),
      });
    });

    setAvgHighest([...allTeams].sort((a, b) => b.avg - a.avg).slice(0, 5));
    setAvgLowest([...allTeams].sort((a, b) => a.avg - b.avg).slice(0, 5));
  };

  return (
    <Container>
      <div>
        <h4>Highest avg age</h4>
        <Content>
          {avgHighest.map((team) => (
            <Item key={team.name}>
              <p>{team.name}</p>
              <p>{team.avg}</p>
            </Item>
          ))}
        </Content>
      </div>

      <div>
        <h4>Lowest avg age</h4>
        <Content>
          {avgLowest.map((team) => (
            <Item key={team.name}>
              <p>{team.name}</p>
              <p>{team.avg}</p>
            </Item>
          ))}
        </Content>
      </div>
    </Container>
  );
}
