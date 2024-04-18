import { CHARACTER_GENDERS, CHARACTER_STATUSES } from "./consts";

export type CharacterGender = (typeof CHARACTER_GENDERS)[number];

export type CharacterStatus = (typeof CHARACTER_STATUSES)[number];

type CharacterOrigin = {
  name: string;
  url: string;
};

type CharacterLocation = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  species: string;
  status: CharacterStatus;
  gender: CharacterGender;
  image: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  episode: string[];
  type: string;
};

export type PaginationInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
