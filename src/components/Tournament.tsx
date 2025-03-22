import React from "react";
import { useGameContext } from "@/context/GameContext";
import { translations } from "@/data/translations";

const Tournament: React.FC = () => {
  const { tournament, selectWinner } = useGameContext();

  if (!tournament) {
    return <div>{translations.loadingTournament}</div>;
  }

  const { rounds, currentRound, currentMatchup } = tournament;
  const currentRoundData = rounds[currentRound];
  const currentMatchupData = currentRoundData.matchups[currentMatchup];

  const totalRounds = Math.ceil(Math.log2(rounds[0].matchups.length * 2));
  const roundName =
    totalRounds > 1
      ? currentRound === totalRounds - 1
        ? translations.final
        : currentRound === totalRounds - 2
        ? translations.semifinal
        : translations.round.replace("{number}", (currentRound + 1).toString())
      : translations.final;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{roundName}</h2>
        <p className="text-gray-600">
          {translations.matchup
            .replace("{current}", (currentMatchup + 1).toString())
            .replace("{total}", currentRoundData.matchups.length.toString())}
        </p>
        <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full rounded-full"
            style={{
              width: `${
                (currentMatchup / currentRoundData.matchups.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      <div className="text-center mb-4">
        <p className="text-lg font-medium">{translations.whichNamePrefer}</p>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => selectWinner(currentMatchupData.name1)}
          className="flex-1 p-6 bg-blue-100 hover:bg-blue-200 transition duration-200 rounded-lg text-center"
        >
          <span className="block text-xl font-bold">
            {currentMatchupData.name1}
          </span>
        </button>

        <button
          onClick={() => selectWinner(currentMatchupData.name2)}
          className="flex-1 p-6 bg-pink-100 hover:bg-pink-200 transition duration-200 rounded-lg text-center"
        >
          <span className="block text-xl font-bold">
            {currentMatchupData.name2}
          </span>
        </button>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          {translations.roundInfo
            .replace("{current}", (currentRound + 1).toString())
            .replace("{total}", totalRounds.toString())
            .replace("{nameCount}", (rounds[0].matchups.length * 2).toString())}
        </p>
      </div>
    </div>
  );
};

export default Tournament;
