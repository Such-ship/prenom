import React, { createContext, useContext, useState } from "react";
import {
  GameContext,
  GameSettings,
  GameState,
  Tournament,
  Matchup,
  Round,
} from "@/types";
import { getNames } from "@/data/names";

// Create tournament structure based on names
function createTournament(names: string[]): Tournament {
  if (names.length < 2) {
    throw new Error("Need at least 2 names to create a tournament");
  }

  // Ensure we have an even number of names by removing one if necessary
  const namesArray = [...names];
  if (namesArray.length % 2 !== 0) {
    namesArray.pop();
  }

  // Create first round matchups
  const firstRound: Round = {
    matchups: [],
  };

  for (let i = 0; i < namesArray.length; i += 2) {
    firstRound.matchups.push({
      name1: namesArray[i],
      name2: namesArray[i + 1],
      winner: null,
    });
  }

  return {
    rounds: [firstRound],
    currentRound: 0,
    currentMatchup: 0,
    isComplete: false,
  };
}

// Create context with default values
const defaultSettings: GameSettings = {
  gender: "boy",
  nameType: "allTypes",
  candidates: 8,
  customNames: [],
};

const GameContextObj = createContext<GameContext>({
  state: GameState.SETUP,
  settings: defaultSettings,
  tournament: null,
  setSettings: () => {},
  setState: () => {},
  selectWinner: () => {},
  resetGame: () => {},
});

export const useGameContext = () => useContext(GameContextObj);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setStateInternal] = useState<GameState>(GameState.SETUP);
  const [settings, setSettingsInternal] =
    useState<GameSettings>(defaultSettings);
  const [tournament, setTournament] = useState<Tournament | null>(null);

  const setSettings = (newSettings: GameSettings) => {
    setSettingsInternal(newSettings);
  };

  const setState = (newState: GameState) => {
    if (newState === GameState.TOURNAMENT && !tournament) {
      // Create a tournament when transitioning to tournament state
      const selectedNames = getNames(
        settings.gender,
        settings.nameType,
        settings.candidates,
        settings.nameType === "custom" ? settings.customNames : undefined
      );

      if (selectedNames.length < 2) {
        console.error("Not enough names to create a tournament");
        return;
      }

      setTournament(createTournament(selectedNames));
    }

    setStateInternal(newState);
  };

  const selectWinner = (name: string) => {
    if (!tournament) return;

    const updatedTournament = { ...tournament };
    const currentRoundData =
      updatedTournament.rounds[updatedTournament.currentRound];
    const currentMatchupData =
      currentRoundData.matchups[updatedTournament.currentMatchup];

    // Set the winner for the current matchup
    currentMatchupData.winner = name;

    // Move to the next matchup
    let nextMatchup = updatedTournament.currentMatchup + 1;
    let nextRound = updatedTournament.currentRound;

    // If we've completed all matchups in the current round
    if (nextMatchup >= currentRoundData.matchups.length) {
      // If there's only one matchup, the tournament is complete
      if (currentRoundData.matchups.length === 1) {
        updatedTournament.isComplete = true;
        setTournament(updatedTournament);
        setStateInternal(GameState.RESULTS);
        return;
      }

      // Create the next round
      nextRound = updatedTournament.currentRound + 1;
      nextMatchup = 0;

      // Collect winners from the current round
      const winners = currentRoundData.matchups.map(
        (matchup) => matchup.winner as string
      );

      // Create new matchups for the next round
      const nextRoundMatchups: Matchup[] = [];
      for (let i = 0; i < winners.length; i += 2) {
        // If there's an odd number of winners, the last one gets a bye
        if (i + 1 >= winners.length) {
          updatedTournament.isComplete = true;
          setTournament(updatedTournament);
          setStateInternal(GameState.RESULTS);
          return;
        }

        nextRoundMatchups.push({
          name1: winners[i],
          name2: winners[i + 1],
          winner: null,
        });
      }

      // Add the new round
      updatedTournament.rounds.push({ matchups: nextRoundMatchups });
    }

    // Update the tournament state
    updatedTournament.currentRound = nextRound;
    updatedTournament.currentMatchup = nextMatchup;
    setTournament(updatedTournament);
  };

  const resetGame = () => {
    setStateInternal(GameState.SETUP);
    setSettingsInternal(defaultSettings);
    setTournament(null);
  };

  const contextValue: GameContext = {
    state,
    settings,
    tournament,
    setSettings,
    setState,
    selectWinner,
    resetGame,
  };

  return (
    <GameContextObj.Provider value={contextValue}>
      {children}
    </GameContextObj.Provider>
  );
};
