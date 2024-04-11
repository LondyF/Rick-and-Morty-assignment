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

import { Character } from "../../types";

import CharacterStatusChip from "./StatusChip";

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

type Props = Character;

const CharacterCard = ({ name, image, status, gender, species }: Props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
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
    </Card>
  );
};

export default CharacterCard;
