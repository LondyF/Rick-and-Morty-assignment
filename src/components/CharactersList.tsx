import useCharactersQuery from "../hooks/use-characters-query";

const CharactersList = () => {
  const { data: characters } = useCharactersQuery({});

  return (
    <div>
      {characters?.results.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
};

export default CharactersList;
