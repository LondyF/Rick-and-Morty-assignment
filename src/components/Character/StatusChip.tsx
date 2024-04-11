import { Chip, styled } from "@mui/material";

import { CharacterStatus } from "../../types";

type Props = {
  status: CharacterStatus;
};

const StyledChip = styled(Chip)(({ theme }) => ({
  boxShadow: theme.shadows[5],
}));

const CharacterStatusChip = ({ status }: Props) => {
  const colorMap = {
    Alive: "success",
    Dead: "error",
    unknown: "warning",
  } as const;

  return <StyledChip label={status} color={colorMap[status]} />;
};

export default CharacterStatusChip;
