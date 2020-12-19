import { Development } from "./Components";
//import "./App.css";

function App() {
  const underdevelopment = true;

  if (underdevelopment) {
    return <Development />;
  }

  return (
    <div className="App">
      <header className="App-header">main site</header>
    </div>
  );
}

export default App;
