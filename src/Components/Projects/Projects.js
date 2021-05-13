//TODO: Use grid system to create a Complex Grid > https://material-ui.com/components/grid/#complex-grid
// or https://material-ui.com/components/cards/#ui-controls
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
  CardMedia,
  Container,
} from "@material-ui/core";
import Typing from "react-typing-animation";
import { Dot } from "react-animated-dots";

export default function Projects() {
  return (
    <Container id="Project-Container">
      <Typing speed={200} loop={true}>
        <Typography>
          Software Projects
          <Dot>.</Dot>
        </Typography>
        <Typing.Reset count={2} delay={10000} />
      </Typing>
      <Grid>
        <Card>
          <CardActionArea
            onClick={() => window.open("https://ismaelbarajas.dev/")}
          >
            <CardContent>
              <Typography>well well well</Typography>
              <Typography>well well well</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Container>
  );
}
