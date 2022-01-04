import {
  Header,
  Projects,
  AboutMe,
  ScrollButton,
  Footer,
  ProgressBar,
} from "./Components";
import { Alert, AlertTitle } from "@material-ui/lab";
import React from "react";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function App() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <main>
        <ProgressBar />
        <Header />
        <AboutMe />
        <Projects />
        <ScrollButton />
        <Footer />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          onClose={handleClose}
        >
          <Alert
            severity="info"
            color="info"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>Update</AlertTitle>
            ismaelbarajas.dev v2 is currently being developed. —{" "}
            <strong>
              <a href="https://github.com/Ismael-Barajas/ismaelbarajas.dev-v2">
                check out the progress here!
              </a>
            </strong>
          </Alert>
        </Snackbar>
      </main>
    </>
  );
}

export default App;
