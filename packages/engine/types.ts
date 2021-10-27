export interface Card {
  symbol: "spades" | "hearts" | "";
  num: number;
  effect: string; // TODO: improve effect
  nextStage: Stage;
}

export interface Skill {
  // TODO: list of skills
}

export interface Character {
  name: string;
  life: number;
  isSheriff: boolean;
  skills: Skill[];
}

export interface Equip {
  name: string;
  skills: Skill[];
}

export interface Player {
  life: number;
  name: string;
  position: number;
  char: Character;
  equips: Equip[];
}

export interface Turn {
  stage: Stage;
  player: Player;
  reactingPlayer?: Player;
}

export interface GameState {
  turn: Turn;
  allPlayers: Player[];
  activePlayers: Player[];
  activeDeck: Card[];
  discardedDeck: Card[];
}

type Stage = "act" | "react";
