export type NameCategory = "classic" | "modern" | "trendy" | "custom";
export type Gender = "boy" | "girl";
export type NameData = {
  [key in Gender]: {
    [category in Exclude<NameCategory, "custom">]: string[];
  };
};

// Sample name data, organized by gender and category
export const names: NameData = {
  boy: {
    classic: [
      "Alexander",
      "Benjamin",
      "Charles",
      "Daniel",
      "Edward",
      "Frederick",
      "George",
      "Henry",
      "James",
      "John",
      "Matthew",
      "Michael",
      "Nicholas",
      "Oliver",
      "Peter",
      "Richard",
      "Samuel",
      "Thomas",
      "William",
      "Joseph",
    ],
    modern: [
      "Ethan",
      "Noah",
      "Liam",
      "Mason",
      "Jacob",
      "Lucas",
      "Jackson",
      "Aiden",
      "Elijah",
      "Logan",
      "Caleb",
      "Ryan",
      "Zachary",
      "Owen",
      "Wyatt",
      "Gabriel",
      "Nathan",
      "Carter",
      "Isaiah",
      "Dylan",
    ],
    trendy: [
      "Jayden",
      "Maverick",
      "Kai",
      "Phoenix",
      "Zion",
      "Atlas",
      "Orion",
      "Axel",
      "Jax",
      "Knox",
      "Ryder",
      "Cruz",
      "Apollo",
      "Archer",
      "Legend",
      "Ace",
      "Nova",
      "Milo",
      "Ezra",
      "Hudson",
    ],
  },
  girl: {
    classic: [
      "Alice",
      "Anne",
      "Catherine",
      "Charlotte",
      "Eleanor",
      "Elizabeth",
      "Emily",
      "Jane",
      "Katherine",
      "Margaret",
      "Mary",
      "Olivia",
      "Rose",
      "Sarah",
      "Sophia",
      "Victoria",
      "Grace",
      "Amelia",
      "Isabelle",
      "Rebecca",
    ],
    modern: [
      "Ava",
      "Emma",
      "Lily",
      "Madison",
      "Zoe",
      "Hannah",
      "Natalie",
      "Chloe",
      "Abigail",
      "Mia",
      "Ella",
      "Layla",
      "Addison",
      "Harper",
      "Evelyn",
      "Riley",
      "Aria",
      "Leah",
      "Audrey",
      "Sofia",
    ],
    trendy: [
      "Luna",
      "Aurora",
      "Willow",
      "Nova",
      "Isla",
      "Hazel",
      "Penelope",
      "Ruby",
      "Ivy",
      "Stella",
      "Quinn",
      "Piper",
      "Scarlett",
      "Juniper",
      "Freya",
      "Aria",
      "Sage",
      "Elodie",
      "Seraphina",
      "Esme",
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

  if (category !== "custom" && names[gender] && names[gender][category]) {
    return shuffleArray(names[gender][category]).slice(0, count);
  }

  return [];
}
