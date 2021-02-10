import { Twitter, Instagram, GitHub } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Development.css";
import { Dot } from "react-animated-dots";
import Typing from "react-typing-animation";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Development() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Typing speed={125}>
            Hi!
            <Typing.Delay ms={2300} />
            <Typing.Backspace count={3} />
            Ismael Baarjsa
            <Typing.Backspace count={5} />
            rajas
            <Dot>.</Dot>
            <Typing.Delay ms={5500} />
          </Typing>
        </h1>
        <div className={classes.root}>
          <a href="https://twitter.com/InXanee">
            <IconButton>
              <Twitter style={{ fontSize: 50 }} />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/lnxanee/">
            <IconButton>
              <Instagram style={{ fontSize: 50 }} />
            </IconButton>
          </a>
          <a href="https://github.com/Ismael-Barajas">
            <IconButton>
              <GitHub style={{ fontSize: 50 }} />
            </IconButton>
          </a>
        </div>
      </header>
    </div>
  );
}
