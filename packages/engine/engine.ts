import { Card, GameState, Player, Turn } from "./types.ts";

export class Engine {
  private gameState: GameState;

  constructor(allPlayers: Player[]) {
    this.gameState = this.initialState(allPlayers);
  }

  start() {
    // game loop
  }

  private initialState(allPlayers: Player[]): GameState {
    return {
      allPlayers,
      activePlayers: allPlayers,
      activeDeck: [],
      discardedDeck: [],
      turn: {
        player: allPlayers.find(({ char }) => char.isSheriff)!,
        stage: "act",
      },
    };
  }

  private playCard(card: Card) {} // -> Turn

  private endTurn() {} // -> Turn

  private shuffleDeck(deck: Card[]): Card[] {
    return deck;
  }
}
