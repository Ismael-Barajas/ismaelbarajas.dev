import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    margin: "20px 0 10px 0",
  },
  text: {
    color: "var(--body--text--color)",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography align="center" className={classes.text}>
        © 2021 Ismael Barajas
      </Typography>
    </Container>
  );
};

export default Footer;
