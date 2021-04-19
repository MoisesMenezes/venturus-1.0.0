export interface TeamProps {
  id: number;
  name: string;
  description: string;
  website: string;
  type: string;
  tags: string[];
  players: PlayerProps[];
}

export interface PlayerProps {
  name: string;
  age: number;
}