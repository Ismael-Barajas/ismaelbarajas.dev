import { makeStyles, LinearProgress } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  div: {
    position: "fixed",
    width: "100%",
    zIndex: 1,
  },
  bar: {
    color: "red",
    backgroundColor: "var(--cardPaper--background--color)",
    height: 6,
    "& .MuiLinearProgress-root": {},
    "& .MuiLinearProgress-bar": {
      backgroundColor: "var(--header--text--color)",
    },
  },
});

const ProgressBar = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let computeProgress = () => {
      // The scrollTop gives length of window that has been scrolled
      const scrolled = document.documentElement.scrollTop;

      // scrollHeight gives total length of the window and
      // The clientHeight gives the length of viewport
      const scrollLength =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = `${(100 * scrolled) / scrollLength}`;

      setProgress(progress);
    };

    // Adding event listener on mounting
    window.addEventListener("scroll", computeProgress);

    // Removing event listener upon unmounting
    return () => window.removeEventListener("scroll", computeProgress);
  });

  return (
    <div className={classes.div}>
      <LinearProgress
        variant="determinate"
        value={progress}
        className={classes.bar}
      />
    </div>
  );
};

export default ProgressBar;
