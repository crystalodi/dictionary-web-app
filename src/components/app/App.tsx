import Search from "../content/search";
import Container from "../layout/container";
import Header from "../layout/header";

function App() {
  document.body.setAttribute('data-theme', 'light');
  document.body.setAttribute('data-font-style', 'sans-serif');
  return (
    <Container>
      <Header/>
      <Search/>
    </Container>
  );
}

export default App;
