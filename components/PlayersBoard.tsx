import React from "react";
import { usePlayerStates, usePlayerActions, isPlayerDead } from "@packages/engine/player-context.tsx";

export default function PlayersBoard() {
  const { active, all } = usePlayerStates();
  const { addPlayer, shotPlayer } = usePlayerActions();
  return (
    <div>
      <button onClick={() => addPlayer("Doidinho do play")}>+</button>
      <button onClick={() => shotPlayer(all.find(p => !isPlayerDead(p))!)}>Bang!</button>
      <h2>
        Active player
      </h2>
      {JSON.stringify(active)}
      <hr />

      <h3>Alive Players</h3>
      {all.filter(p => !isPlayerDead(p)).map((p) => (
        <p key={p.position}>{JSON.stringify(p)}</p>
      ))}

      <h3>Dead Players</h3>
      {all.filter(isPlayerDead).map((p) => (
        <p key={p.position}>{JSON.stringify(p)}</p>
      ))}
    </div>
  );
}

// function PlayerView({}) {
//   return
// }
