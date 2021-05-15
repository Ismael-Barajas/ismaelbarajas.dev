//TODO: Picture of me with a paragraph or two about me short

import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
  CardMedia,
  Container,
  Paper,
  Avatar,
} from "@material-ui/core";
import Typing from "react-typing-animation";
import { Dot } from "react-animated-dots";
import styles from "./AboutMe.module.css";
import imgAvatar from "../../Images/Ismael.jpg";

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
      <Paper className={styles.Paper} square>
        <Grid Container direction="column">
          <Grid item>
            <div className={styles.CenterDiv}>
              <Avatar
                alt="Ismael"
                src={imgAvatar}
                className={styles.AvatarImg}
              />
            </div>
          </Grid>
          <Grid item>
            <div className={styles.CenterDiv}>
              <Typography variant="body1" className={styles.BodyParagraph}>
                Lorem ipsum dolor sit amet, viris mucius adversarium an mei, eu
                dicat aeque graece qui. Duo brute viris sensibus et. Ius possim
                pericula te, hendrerit assentior id his. Eum at alii enim
                invenire, nam et ubique aperiri convenire.
                <br />
                Quem quaerendum no est, vim invenire omittantur appellantur ut,
                dicit dolorem molestie qui ei.Graecis alienum vix et, eam cu
                iudico diceret omittam. Natum intellegebat eos ex. Veniam
                dolorem eleifend mel ad, stet verear torquatos sed no. Eum
                petentium gloriatur adolescens ex, vivendo eligendi an sed.
                Dictas civibus adversarium vim ea, erant choro inermis quo eu.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
