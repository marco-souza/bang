import React, { useState } from "react";
import { ChildrenProps, createCtx } from "@utils/react.tsx";
import { Character, Player } from "./types.ts";

interface PlayerStates {
  readonly all: Player[];
  readonly active?: Player;
}

interface PlayerActions {
  addPlayer: (name: string) => void;
  shotPlayer: (player: Player) => void;
}

const [usePlayerStates, PlayerStateProvider] = createCtx<PlayerStates>(
  "PlayerStates",
);
const [usePlayerActions, PlayerActionsProvider] = createCtx<PlayerActions>(
  "PlayerActions",
);
export { usePlayerActions, usePlayerStates };

export function PlayerProvider({ children }: ChildrenProps) {
  // TODO: add redux-toolkit
  const [state, setState] = useState<PlayerStates>({ all: [] });
  const actions: PlayerActions = {
    addPlayer(name: string) {
      const char = makeRandomChar();
      const player: Player = {
        name,
        char,
        equips: [],
        life: char.life,
        position: state.all.length,
      };
      setState({
        ...state,
        all: [...state.all, player],
      });
    },
    shotPlayer(target: Player) {
      setState({
        all: [...state.all.map(findAndShotMapper(target))],
      });
    },
  };
  return (
    <PlayerStateProvider value={state}>
      <PlayerActionsProvider value={actions}>{children}</PlayerActionsProvider>
    </PlayerStateProvider>
  );
}

export function isPlayerDead(player: Player) {
  return player.life <= 0;
}

function makeRandomChar(): Character {
  return {
    name: "Duke Looky",
    isSheriff: false,
    life: 4,
    skills: [], // char skills
  };
}

function findAndShotMapper(target: Player) {
  return (player: Player) => ({
    ...(player.position === target.position ? shotPlayer(player) : player),
  });
}

function shotPlayer(player: Player) {
  if (player.life == 0) return player;
  return {
    ...player,
    life: player.life - 1,
  };
}
