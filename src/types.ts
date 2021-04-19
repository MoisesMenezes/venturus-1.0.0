export interface TeamProps {
  id: number;
  name: string;
  description: string;
  website: string;
  teamType: string;
  tags: string[];
  players: PlayerProps[];
}

export interface PlayerProps {
  name: string;
  age: number;
}