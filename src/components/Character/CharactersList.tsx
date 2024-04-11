import useCharactersQuery from "../../hooks/use-characters-query";

import CharacterCard from "./CharacterCard";

const CharactersList = () => {
  const { data: characters } = useCharactersQuery({});

  return (
    <div>
      {characters?.results.map((character) => (
        <CharacterCard {...character} />
      ))}
    </div>
  );
};

export default CharactersList;
