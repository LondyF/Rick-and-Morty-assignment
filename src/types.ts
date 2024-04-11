import { CHARACTER_GENDERS, CHARACTER_STATUSES } from "./consts";

export type CharacterGender = (typeof CHARACTER_GENDERS)[number];

export type CharacterStatus = (typeof CHARACTER_STATUSES)[number];

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
