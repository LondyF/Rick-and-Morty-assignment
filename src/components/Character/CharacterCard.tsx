import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { motion } from "framer-motion";

import { Character } from "../../types";

import { CharacterStatusChip, CharacterSpeciesChip } from "./StatusChips";
import CharacterDetailModal from "./CharacterDetailModal";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const StyledTitleContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  "&:after": {
    content: '""',
    display: "block",
    height: "3px",
    width: "40px",
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(0.5),
  },
}));

const MotionCard = motion(Card);

type Props = Character;

const CharacterCard = (character: Props) => {
  const { name, image, status, gender, species } = character;

  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);

  return (
    <>
      <MotionCard
        sx={{ maxWidth: 300 }}
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Box position="relative">
          <CardMedia component="img" image={image} />
          <Stack
            gap={1}
            direction="row"
            position="absolute"
            right={10}
            bottom={10}
          >
            <CharacterStatusChip status={status} />
            <CharacterSpeciesChip species={species} />
          </Stack>
        </Box>
        <CardContent>
          <StyledTitleContainer>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
              >
                {gender}
              </Typography>
            </Stack>
          </StyledTitleContainer>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button onClick={() => setIsDetailModalOpen(true)}>
            See more
            <ChevronRight />
          </Button>
        </CardActions>
      </MotionCard>

      <CharacterDetailModal
        character={character}
        onClose={() => setIsDetailModalOpen(false)}
        isOpen={isDetailModalOpen}
      />
    </>
  );
};

export default React.memo(CharacterCard);
