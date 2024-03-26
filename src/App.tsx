import { Container } from "./components/layout";
import { Search } from "./components/search";

function App() {
  document.body.setAttribute('data-theme', 'light');
  document.body.setAttribute('data-font-style', 'sans-serif');
  return (
    <div className="App">
      <Container>
        <Search/>
      </Container>
    </div>
  );
}

export default App;
