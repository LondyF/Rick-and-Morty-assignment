export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Character = {
  id: number;
  name: string;
  species: string;
  status: CharacterStatus;
  gender: CharacterGender;
  image: string;
};

export type PaginationInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
