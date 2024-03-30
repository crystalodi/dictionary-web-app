import Search from "../content/search";
import Container from "../layout/container";

function App() {
  document.body.setAttribute('data-theme', 'light');
  document.body.setAttribute('data-font-style', 'sans-serif');
  return (
    <Container>
      <Search/>
    </Container>
  );
}

export default App;
