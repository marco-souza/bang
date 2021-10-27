import { useDeno } from "aleph/react";
import React from "react";
import Logo from "~/components/logo.tsx";
import PlayersBoard from "~/components/PlayersBoard.tsx";
import useCounter from "~/lib/useCounter.ts";

import { withProviders } from "@utils/react.tsx";
import { PlayerProvider } from "@packages/engine/player-context.tsx";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();
  const version = useDeno(() => Deno.version.deno);

  return withProviders(
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo">
        <Logo />
      </p>
      <h1>
        Welcome to use <strong>Bang!</strong>!
      </h1>
      <PlayersBoard />
    </div>,
    globalProviders,
  );
}

const globalProviders = [
  PlayerProvider,
];
