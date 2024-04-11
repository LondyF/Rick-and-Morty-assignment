import { useQuery } from "@tanstack/react-query";

import httpClient from "../utils/http-client";
import { Character, CharacterGender, PaginationInfo } from "../types";

type CharactersQueryResponse = {
  info: PaginationInfo;
  results: Character[];
};

type UseCharactersQueryOptions = {
  gender?: CharacterGender;
  species?: string;
  status?: string;
  name?: string;
};

const keys = {
  characters: (query: UseCharactersQueryOptions) =>
    ["characters", query] as const,
} as const;

const useCharactersQuery = (options: UseCharactersQueryOptions) => {
  return useQuery({
    queryKey: keys.characters(options),
    queryFn: async () => {
      const { data } = await httpClient.get<CharactersQueryResponse>(
        `/character/?${new URLSearchParams(options).toString()}`
      );

      return data;
    },
  });
};

export default useCharactersQuery;
