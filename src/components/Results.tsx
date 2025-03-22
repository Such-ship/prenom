import React from "react";
import { useGameContext } from "@/context/GameContext";

const Results: React.FC = () => {
  const { tournament, resetGame } = useGameContext();

  if (!tournament || !tournament.isComplete) {
    return <div>No tournament results available.</div>;
  }

  const { rounds } = tournament;
  const winnerName = rounds[rounds.length - 1].matchups[0].winner;
  const totalRounds = rounds.length;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Congratulations!</h2>
        <p className="text-xl text-gray-700 mb-4">Your baby name winner is:</p>
        <div className="py-6 px-8 bg-gradient-to-r from-blue-100 to-pink-100 rounded-lg">
          <h1 className="text-4xl font-bold text-blue-800">{winnerName}</h1>
        </div>
      </div>

      <div className="mt-8 mb-6">
        <h3 className="text-xl font-bold mb-4">Tournament Recap</h3>

        <div className="space-y-4">
          {rounds.map((round, roundIndex) => (
            <div
              key={roundIndex}
              className="p-3 bg-gray-50 rounded border border-gray-200"
            >
              <h4 className="font-medium text-gray-800 mb-2">
                {roundIndex === totalRounds - 1
                  ? "Final"
                  : roundIndex === totalRounds - 2
                  ? "Semi-final"
                  : `Round ${roundIndex + 1}`}
              </h4>
              <div className="space-y-2">
                {round.matchups.map((matchup, matchupIndex) => (
                  <div
                    key={matchupIndex}
                    className="flex items-center p-2 bg-white rounded"
                  >
                    <div className="flex-1 flex">
                      <span
                        className={`px-2 ${
                          matchup.winner === matchup.name1
                            ? "font-bold text-blue-600"
                            : "text-gray-500"
                        }`}
                      >
                        {matchup.name1}
                      </span>
                      <span className="px-2 text-gray-400">vs</span>
                      <span
                        className={`px-2 ${
                          matchup.winner === matchup.name2
                            ? "font-bold text-blue-600"
                            : "text-gray-500"
                        }`}
                      >
                        {matchup.name2}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        Winner: {matchup.winner}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={resetGame}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-200"
        >
          Start New Tournament
        </button>
      </div>
    </div>
  );
};

export default Results;
