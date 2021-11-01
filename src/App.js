import {
  Header,
  Projects,
  AboutMe,
  ScrollButton,
  Footer,
  ProgressBar,
} from "./Components";

function App() {
  return (
    <>
      <main>
        <ProgressBar />
        <Header />
        <AboutMe />
        <Projects />
        <ScrollButton />
        <Footer />
      </main>
    </>
  );
}

export default App;
