import React from "react";
import {
  isPlayerDead,
  usePlayerActions,
  usePlayerStates,
} from "@packages/engine/player-context.tsx";

export default function PlayersBoard() {
  const { active, all } = usePlayerStates();
  const { addPlayer, shotPlayer } = usePlayerActions();
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => addPlayer("Doidinho do play")}>+</button>
        <button title="Bang!"onClick={() => shotPlayer(all.find((p) => !isPlayerDead(p))!)}>
          *
        </button>
      </div>
      <h2>
        Active player
      </h2>
      {JSON.stringify(active)}
      <hr />

      <h3>Alive Players</h3>
      {all.filter((p) => !isPlayerDead(p)).map((p) => (
        <p key={p.position}>
          {JSON.stringify(p)}
        </p>
      ))}

      <h3>Dead Players</h3>
      {all.filter(isPlayerDead).map((p) => (
        <p key={p.position}>
          {JSON.stringify(p)}
        </p>
      ))}
    </div>
  );
}

// function PlayerView({}) {
//   return
// }
