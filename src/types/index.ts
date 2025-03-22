import { Gender, NameCategory } from "@/data/names";

export interface Matchup {
  name1: string;
  name2: string;
  winner: string | null;
}

export interface Round {
  matchups: Matchup[];
}

export interface Tournament {
  rounds: Round[];
  currentRound: number;
  currentMatchup: number;
  isComplete: boolean;
}

export interface GameSettings {
  gender: Gender;
  nameType: NameCategory;
  candidates: number;
  customNames: string[];
}

export enum GameState {
  SETUP = "setup",
  TOURNAMENT = "tournament",
  RESULTS = "results",
}

export interface GameContext {
  state: GameState;
  settings: GameSettings;
  tournament: Tournament | null;
  setSettings: (settings: GameSettings) => void;
  setState: (state: GameState) => void;
  selectWinner: (name: string) => void;
  resetGame: () => void;
}
