import { useInfiniteQuery } from "@tanstack/react-query";

import httpClient from "../utils/http-client";

import {
  Character,
  CharacterGender,
  CharacterStatus,
  PaginationInfo,
} from "../types";

type CharactersQueryResponse = {
  info: PaginationInfo;
  results: Character[];
};

type UseCharactersQueryOptions = {
  gender?: CharacterGender;
  status?: CharacterStatus;
  species?: string;
  name?: string;
};

const keys = {
  characters: (query: UseCharactersQueryOptions) => ["characters", query],
} as const;

const useCharactersQuery = (options: UseCharactersQueryOptions) => {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: keys.characters(options),
    queryFn: async ({ pageParam }) => {
      const { data } = await httpClient.get<CharactersQueryResponse>(
        `/character/?${new URLSearchParams({
          ...options,
          page: String(pageParam),
        }).toString()}`
      );

      return data;
    },
    getNextPageParam: ({ info }) => {
      if (!info.next) return undefined;

      const url = new URL(String(info.next));
      const page = url.searchParams.get("page");

      return !!page ? Number(page) : undefined;
    },
  });
};

export default useCharactersQuery;
