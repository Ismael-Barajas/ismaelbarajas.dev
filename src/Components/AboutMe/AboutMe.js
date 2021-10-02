//TODO: Find a good font for the paragraph
import { Grid, Typography, Container, Paper, Avatar } from "@material-ui/core";
import Typing from "react-typing-animation";
import { Dot } from "react-animated-dots";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <Container className={styles.AboutMeContainer} id="AboutMe-Container">
      <Typing speed={200} loop={true}>
        <Typography variant="h2" className={styles.H2Text}>
          About Me
          <Dot>.</Dot>
        </Typography>
        <Typing.Reset count={2} delay={10000} />
      </Typing>
      <Paper className={styles.Paper}>
        <Grid Container direction="column">
          <Grid item>
            <div className={styles.CenterDiv}>
              <Avatar
                alt="Ismael"
                src="/Images/Ismael.jpg"
                className={styles.AvatarImg}
              />
            </div>
          </Grid>
          <Grid item>
            <div className={styles.CenterDiv}>
              <Typography paragraph className={styles.BodyParagraph}>
                Hi! I'm Ismael Barajas.
                <br />
                <br />
                I'm currently a senior student at California State University,
                Fullerton. Expected to graduate in 2022 with a B.S. in Computer
                Science. When I’m not coding, I enjoy playing video games
                (unhealthy amount of Valorant) and building/collecting
                keyboards.
                <br />
                <br />
                As of late I've taken an interest in Front End developing with
                React. You can check out some of the projects I have worked on
                below! I would say I’m most proficient with React/JavaScript/JSX
                and C++. I’m also familiar with other languages as well, such as
                C and Python. I wouldn’t consider myself a Front End Developer
                just yet because it’s very early in my career and interests
                change over time. So who knows what other projects, languages,
                and career opportunities await!
                <br />
                <br />
                Feel free to contact me anytime through any of the platforms
                above! Thanks for stopping by!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
