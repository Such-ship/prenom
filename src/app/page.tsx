"use client";

import React from "react";
import { GameProvider } from "@/context/GameContext";
import { useGameContext } from "@/context/GameContext";
import { GameState } from "@/types";
import SetupForm from "@/components/SetupForm";
import Tournament from "@/components/Tournament";
import Results from "@/components/Results";

const GameContainer = () => {
  const { state } = useGameContext();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 py-10">
      {state === GameState.SETUP && <SetupForm />}
      {state === GameState.TOURNAMENT && <Tournament />}
      {state === GameState.RESULTS && <Results />}
    </div>
  );
};

export default function Home() {
  return (
    <GameProvider>
      <main className="min-h-screen">
        <GameContainer />
      </main>
    </GameProvider>
  );
}
