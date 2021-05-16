//TODO: Find a good font for the cards and change text color to match AboutMe text color.
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
  CardMedia,
  Container,
  Button,
} from "@material-ui/core";
import Typing from "react-typing-animation";
import { Dot } from "react-animated-dots";
import styles from "./Projects.module.css";
import projects from "./projects.json";

export default function Projects() {
  return (
    <Container className={styles.ProjectsContainer} id="Project-Container">
      <Typing speed={200} loop={true}>
        <Typography variant="h2" className={styles.H2Text}>
          Projects
          <Dot>.</Dot>
        </Typography>
        <Typing.Reset count={2} delay={10000} />
      </Typing>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={styles.GridContainer}
        spacing={1}
      >
        {projects.map((item) => (
          <Grid item>
            <Card className={styles.Cards}>
              <CardActionArea onClick={() => window.open(item.homepage_url)}>
                <CardMedia
                  image={item.image_route}
                  title={item.name}
                  className={styles.CardImage}
                />
                <CardContent className={styles.CardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => window.open(item.github_url)}>
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
