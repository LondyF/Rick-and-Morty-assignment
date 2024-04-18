import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import { Character } from "../../types";
import { CharacterStatusChip, CharacterSpeciesChip } from "./StatusChips";

const StyledDialogTitleContainer = styled(DialogTitle)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  "&:after": {
    content: '""',
    display: "block",
    height: "3px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(1),
  },
}));

const Separator = styled("div")({
  height: "1px",
  background: `linear-gradient(270deg, rgba(230, 229, 235, 0) 0%, #E6E5EB 51.56%, rgba(230, 229, 235, 0) 100%)`,
});

const StyledImage = styled("img")({
  width: "100px",
  height: "100px",
  borderRadius: "5px",
  objectFit: "cover",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});

type Props = {
  character: Character;
  onClose: () => void;
  isOpen: boolean;
};

const parseEpisodeNumber = (episode: string) => {
  return episode.split("/").pop();
};

const isLastIndex = (index: number, array: unknown[]) => {
  return index === array.length - 1;
};

const CharacterDetailModal = ({ character, onClose, isOpen }: Props) => {
  const { species, status, gender, name } = character;

  return (
    <Dialog fullWidth maxWidth="sm" open={isOpen} onClose={onClose}>
      <StyledDialogTitleContainer>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <div>
            {name}
            <Typography
              color="text.secondary"
              fontSize={10}
              fontStyle="initial"
              component="div"
            >
              {gender}
            </Typography>
          </div>
          <Stack direction="row" gap={1}>
            <CharacterStatusChip status={status} />
            <CharacterSpeciesChip species={species} />
          </Stack>
        </Stack>
      </StyledDialogTitleContainer>
      <DialogContent>
        <Stack gap={2}>
          <Stack direction="row" spacing={2}>
            <StyledImage src={character.image} alt={character.name} />
            <Box>
              <Typography variant="body1">
                Origin: {character?.origin?.name}
              </Typography>
              <Typography variant="body1">
                Location: {character?.location.name}
              </Typography>
              <Typography variant="body1">
                Type: {character.type || "-"}
              </Typography>
            </Box>
          </Stack>
          <Separator />
          <div>
            <Typography variant="h6">Episodes</Typography>
            {character.episode.map((episode, index) => (
              <Typography component="span" key={episode}>
                Episode {parseEpisodeNumber(episode)}
                {isLastIndex(index, character.episode) ? "" : ","}{" "}
              </Typography>
            ))}
          </div>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(CharacterDetailModal);
