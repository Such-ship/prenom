import React, { useState, ChangeEvent } from "react";
import { useGameContext } from "@/context/GameContext";
import { GameState } from "@/types";
import { NameCategory, Gender } from "@/data/names";
import { translations } from "@/data/translations";

// Powers of two options for candidates
const CANDIDATE_OPTIONS = [2, 4, 8, 16, 32, 64];

const SetupForm: React.FC = () => {
  const { settings, setSettings, setState } = useGameContext();
  const [fileContent, setFileContent] = useState<string>("");

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      gender: e.target.value as Gender,
    });
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      nameType: e.target.value as NameCategory,
    });
  };

  const handleCandidatesChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setSettings({
      ...settings,
      candidates: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setFileContent(content);

      // Parse names from file (assuming one name per line)
      const names = content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      setSettings({
        ...settings,
        customNames: names,
      });
    };

    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate custom names if needed
    if (settings.nameType === "custom" && settings.customNames.length < 2) {
      alert(translations.customNamesValidation);
      return;
    }

    // Start the tournament
    setState(GameState.TOURNAMENT);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {translations.tournamentTitle}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            {translations.gender}
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="boy"
                checked={settings.gender === "boy"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              <span>{translations.boy}</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="girl"
                checked={settings.gender === "girl"}
                onChange={handleGenderChange}
                className="mr-2"
              />
              <span>{translations.girl}</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            {translations.nameType}
          </label>
          <select
            value={settings.nameType}
            onChange={handleTypeChange}
            className="w-full p-2 border rounded"
          >
            <option value="classic">{translations.classic}</option>
            <option value="modern">{translations.modern}</option>
            <option value="trendy">{translations.trendy}</option>
            <option value="allTypes">{translations.allTypes}</option>
            <option value="custom">{translations.custom}</option>
          </select>
        </div>

        {settings.nameType === "custom" && (
          <div className="mb-6">
            <label className="block mb-2 font-medium">
              {translations.uploadCustomNames}
            </label>
            <input
              type="file"
              accept=".txt"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
            <p className="text-sm text-gray-500 mt-1">
              {translations.uploadTxtFile}
            </p>
            {fileContent && (
              <div className="mt-2">
                <p className="font-medium">
                  {translations.namesLoaded} {settings.customNames.length}
                </p>
                <div className="mt-1 p-2 border rounded max-h-40 overflow-y-auto">
                  <ul className="list-disc pl-5">
                    {settings.customNames.slice(0, 5).map((name, i) => (
                      <li key={i}>{name}</li>
                    ))}
                  </ul>
                  {settings.customNames.length > 5 && (
                    <p className="text-sm text-gray-500 mt-1">
                      {translations.andMore.replace(
                        "{count}",
                        (settings.customNames.length - 5).toString()
                      )}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            {translations.numberOfCandidates}
          </label>
          <select
            value={settings.candidates}
            onChange={handleCandidatesChange}
            className="w-full p-2 border rounded"
          >
            {CANDIDATE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-500 mt-1">
            {translations.powerOf2Explanation}
          </p>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-200"
          >
            {translations.startTournament}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetupForm;
