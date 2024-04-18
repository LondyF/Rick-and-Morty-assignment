import { Chip, styled } from "@mui/material";

import { CharacterStatus } from "../../types";

type CharacterStatusChipProps = {
  status: CharacterStatus;
};

const StyledChip = styled(Chip)(({ theme }) => ({
  boxShadow: theme.shadows[5],
}));

export const CharacterStatusChip = ({ status }: CharacterStatusChipProps) => {
  const colorMap = {
    Alive: "success",
    Dead: "error",
    unknown: "warning",
  } as const;

  return <StyledChip label={status} color={colorMap[status]} />;
};

type CharacterSpeciesChipProps = {
  species: string;
};

export const CharacterSpeciesChip = ({
  species,
}: CharacterSpeciesChipProps) => {
  return (
    <StyledChip sx={{ background: "rgba(0, 0, 0, 0.5)" }} label={species} />
  );
};
