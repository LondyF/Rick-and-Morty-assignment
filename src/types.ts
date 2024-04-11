export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export type Character = {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: CharacterGender;
};

export type PaginationInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
