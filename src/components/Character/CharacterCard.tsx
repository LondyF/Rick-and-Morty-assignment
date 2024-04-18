import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";

import { Character } from "../../types";

import CharacterStatusChip from "./StatusChip";

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

const CharacterCard = ({ name, image, status, gender, species }: Props) => {
  return (
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
        <CardMedia component="img" alt="green iguana" image={image} />
        <Stack
          gap={1}
          direction="row"
          position="absolute"
          right={10}
          bottom={10}
        >
          <CharacterStatusChip status={status} />
          <Chip label={species} />
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
      <CardActions>
        <Button>More</Button>
      </CardActions>
    </MotionCard>
  );
};

export default CharacterCard;
