import axios from "axios";
interface PlayerResponse {
  player_name: string;
  birth_country: string;
  age: number;
}

export interface Player {
  name: string;
  nacionality: string;
  age: number;
}

const getPlayers = async (name: string): Promise<Player[]> => {

  const options: any = {
    method: "GET",
    url: `https://api-football-v1.p.rapidapi.com/v2/players/search/${name}`,
    headers: {
      "x-rapidapi-key": "7deb7e67d8msh3b7b000e612da16p1e16fcjsn1a08ac9c4e08",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    },
  };

  const { data } = await axios.request(options);
  const { players } = data.api;

  const formatedPlayers = players.map((player: PlayerResponse) => {
    return {
      name: player.player_name,
      nacionality: player.birth_country,
      age: player.age,
    };
  });

  return formatedPlayers;
};

export default getPlayers;
