export type NameCategory =
  | "classic"
  | "modern"
  | "trendy"
  | "allTypes"
  | "custom";
export type Gender = "boy" | "girl";
export type NameData = {
  [key in Gender]: {
    [category in Exclude<NameCategory, "custom" | "allTypes">]: string[];
  };
};

// Sample name data, organized by gender and category
export const names: NameData = {
  boy: {
    classic: [
      "Albert",
      "André",
      "Antoine",
      "Auguste",
      "Bernard",
      "Bertrand",
      "Charles",
      "Christian",
      "Claude",
      "Daniel",
      "Denis",
      "Didier",
      "Dominique",
      "Édouard",
      "Émile",
      "Étienne",
      "Eugène",
      "François",
      "Frédéric",
      "Georges",
      "Gérard",
      "Gilbert",
      "Gilles",
      "Guy",
      "Henri",
      "Hervé",
      "Hubert",
      "Jacques",
      "Jean",
      "Jean-Claude",
      "Jean-Louis",
      "Jean-Marie",
      "Jean-Michel",
      "Jean-Pierre",
      "Joseph",
      "Jules",
      "Julien",
      "Laurent",
      "Léon",
      "Louis",
      "Luc",
      "Marc",
      "Marcel",
      "Maurice",
      "Michel",
      "Nicolas",
      "Olivier",
      "Pascal",
      "Patrick",
      "Paul",
      "Philippe",
      "Pierre",
      "Raymond",
      "René",
      "Richard",
      "Robert",
      "Roger",
      "Roland",
      "Serge",
      "Stéphane",
      "Thierry",
      "Victor",
      "Vincent",
      "Xavier",
      "Yves",
      "Alain",
    ],
    modern: [
      "Adam",
      "Adrien",
      "Alexandre",
      "Alexis",
      "Anthony",
      "Arthur",
      "Baptiste",
      "Bastien",
      "Benjamin",
      "Clément",
      "Corentin",
      "David",
      "Dorian",
      "Dylan",
      "Enzo",
      "Esteban",
      "Evan",
      "Florian",
      "Gabriel",
      "Gaëtan",
      "Guillaume",
      "Hugo",
      "Jérémy",
      "Jordan",
      "Julien",
      "Kévin",
      "Killian",
      "Léo",
      "Loïc",
      "Louis",
      "Lucas",
      "Ludovic",
      "Mathéo",
      "Mathieu",
      "Mathis",
      "Mattéo",
      "Maxence",
      "Maxime",
      "Michaël",
      "Nathan",
      "Nicolas",
      "Noah",
      "Noé",
      "Paul",
      "Pierre",
      "Quentin",
      "Raphaël",
      "Rémi",
      "Romain",
      "Samuel",
      "Simon",
      "Théo",
      "Thomas",
      "Thibault",
      "Thibaut",
      "Timéo",
      "Tom",
      "Tristan",
      "Valentin",
      "Victor",
      "William",
      "Yanis",
      "Yann",
      "Robin",
      "Sacha",
      "Amaury",
    ],
    trendy: [
      "Aaron",
      "Amir",
      "Ayden",
      "Côme",
      "Eden",
      "Elio",
      "Eliott",
      "Ézio",
      "Gabin",
      "Gaspard",
      "Ibrahim",
      "Isaac",
      "Ismaël",
      "Jayden",
      "Kaïs",
      "Lenny",
      "Liam",
      "Livio",
      "Loan",
      "Lorenzo",
      "Malo",
      "Marceau",
      "Marin",
      "Maël",
      "Milo",
      "Naël",
      "Nahil",
      "Naïm",
      "Nino",
      "Noa",
      "Owen",
      "Pablo",
      "Raphaël",
      "Rio",
      "Sasha",
      "Sohan",
      "Soan",
      "Théodore",
      "Tiago",
      "Timothée",
      "Ulysse",
      "Victoire",
      "Virgile",
      "Anatole",
      "Basile",
      "César",
      "Léandre",
      "Léonard",
      "Lucien",
      "Lysandre",
      "Marius",
      "Noam",
      "Octave",
      "Oscar",
      "Roméo",
      "Ruben",
      "Sacha",
      "Siméon",
      "Soren",
      "Thiago",
      "Thyméo",
      "Timothé",
      "Vadim",
      "Viggo",
      "Zack",
      "Zayn",
    ],
  },
  girl: {
    classic: [
      "Agnès",
      "Aimée",
      "Albertine",
      "Alice",
      "Amélie",
      "Anaïs",
      "Andrée",
      "Angèle",
      "Anne",
      "Bernadette",
      "Béatrice",
      "Brigitte",
      "Catherine",
      "Cécile",
      "Charlotte",
      "Christiane",
      "Claire",
      "Claude",
      "Colette",
      "Danielle",
      "Denise",
      "Dominique",
      "Édith",
      "Éliane",
      "Élisabeth",
      "Élise",
      "Émilie",
      "Françoise",
      "Gabrielle",
      "Geneviève",
      "Germaine",
      "Gisèle",
      "Hélène",
      "Henriette",
      "Jacqueline",
      "Jeanne",
      "Joséphine",
      "Josette",
      "Juliette",
      "Laure",
      "Laurence",
      "Louise",
      "Lucie",
      "Lucienne",
      "Madeleine",
      "Marcelle",
      "Marguerite",
      "Marie",
      "Marie-Claude",
      "Marie-France",
      "Marie-Thérèse",
      "Marthe",
      "Martine",
      "Michèle",
      "Monique",
      "Nicole",
      "Odette",
      "Patricia",
      "Paulette",
      "Pauline",
      "Simone",
      "Sophie",
      "Suzanne",
      "Sylvie",
      "Thérèse",
      "Véronique",
    ],
    modern: [
      "Adèle",
      "Alexia",
      "Alice",
      "Alicia",
      "Amandine",
      "Anaïs",
      "Andréa",
      "Anna",
      "Audrey",
      "Aurélie",
      "Camille",
      "Carla",
      "Charlotte",
      "Chloé",
      "Clara",
      "Clémence",
      "Coralie",
      "Elsa",
      "Emma",
      "Élodie",
      "Émilie",
      "Eva",
      "Fanny",
      "Flora",
      "Inès",
      "Jade",
      "Julie",
      "Juliette",
      "Justine",
      "Laura",
      "Laurine",
      "Léa",
      "Léna",
      "Lisa",
      "Louna",
      "Lucie",
      "Maëlle",
      "Maëlys",
      "Manon",
      "Margaux",
      "Marine",
      "Marion",
      "Mathilde",
      "Mélanie",
      "Mélina",
      "Morgane",
      "Nina",
      "Noémie",
      "Océane",
      "Pauline",
      "Romane",
      "Sabrina",
      "Sandra",
      "Sarah",
      "Solène",
      "Sophie",
      "Stéphanie",
      "Typhaine",
      "Valentine",
      "Vanessa",
      "Victoria",
      "Zoé",
      "Émeline",
      "Célia",
    ],
    trendy: [
      "Alba",
      "Alma",
      "Ambre",
      "Aya",
      "Agathe",
      "Apolline",
      "Aria",
      "Assia",
      "Billie",
      "Brune",
      "Capucine",
      "Charlie",
      "Constance",
      "Eden",
      "Elena",
      "Eléonore",
      "Elia",
      "Elise",
      "Esmée",
      "Éva",
      "Garance",
      "Hanaé",
      "Héloïse",
      "Inaya",
      "Joy",
      "Judith",
      "June",
      "Lila",
      "Lily",
      "Livia",
      "Liz",
      "Lou",
      "Louison",
      "Lya",
      "Lyana",
      "Lyra",
      "Mabel",
      "Madeleine",
      "Maëva",
      "Malia",
      "Maria",
      "Mila",
      "Mya",
      "Naomi",
      "Nell",
      "Ninon",
      "Nour",
      "Olympe",
      "Prune",
      "Romy",
      "Rose",
      "Roxane",
      "Salomé",
      "Sixtine",
      "Suzanne",
      "Tess",
      "Théa",
      "Victoire",
      "Violette",
      "Wanda",
      "Zélie",
      "Zéphyrine",
      "Alix",
      "Louise",
    ],
  },
};

// Function to shuffle array using Fisher-Yates algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Function to get names based on gender, category, and count
export function getNames(
  gender: Gender,
  category: NameCategory,
  count: number,
  customNames?: string[]
): string[] {
  if (category === "custom" && customNames) {
    return shuffleArray(customNames).slice(0, count);
  }

  if (category === "allTypes") {
    // Combine all name types for the selected gender
    const allNames = [
      ...names[gender].classic,
      ...names[gender].modern,
      ...names[gender].trendy,
    ];
    return shuffleArray(allNames).slice(0, count);
  }

  if (category !== "custom" && names[gender] && names[gender][category]) {
    return shuffleArray(names[gender][category]).slice(0, count);
  }

  return [];
}
