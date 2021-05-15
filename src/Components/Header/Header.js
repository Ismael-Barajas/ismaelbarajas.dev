import {
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Dot } from "react-animated-dots";
import Typing from "react-typing-animation";

import styles from "./Header.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const jumpTo = () => {
  var elmnt = document.getElementById("AboutMe-Container");
  elmnt.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  const classes = useStyles();

  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <h1>
          <Typing speed={125}>
            Hi!
            <Typing.Delay ms={2300} />
            <Typing.Backspace count={3} />
            Ismael Baarj
            <Typing.Backspace count={3} />
            rajas
            <Dot>.</Dot>
            <Typing.Delay ms={5500} />
          </Typing>
        </h1>
        <div className={classes.root}>
          <a href="https://www.linkedin.com/in/ismael-barajas-52a877211/">
            <IconButton>
              <LinkedInIcon style={{ fontSize: 50 }} />
            </IconButton>
          </a>
          <a href="https://github.com/Ismael-Barajas">
            <IconButton>
              <GitHubIcon style={{ fontSize: 50 }} />
            </IconButton>
          </a>
          <a href="mailto:ismaelbarajas.dev@gmail.com">
            <IconButton>
              <EmailIcon style={{ fontSize: 50 }} />
            </IconButton>
          </a>
          <a href="https://twitter.com/InXanee">
            <IconButton>
              <TwitterIcon style={{ fontSize: 50 }} />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/lnxanee/">
            <IconButton>
              <InstagramIcon style={{ fontSize: 50 }} />
            </IconButton>
          </a>
        </div>
      </header>
      <div>
        <IconButton
          onClick={() => {
            jumpTo();
          }}
        >
          <ExpandMoreIcon style={{ fontSize: 40 }} />
        </IconButton>
      </div>
    </div>
  );
}
