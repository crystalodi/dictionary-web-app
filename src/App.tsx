import { Container } from './components/layout'
import { Header } from './components/layout'

function App() {
  document.body.setAttribute('data-theme', 'light');
  document.body.setAttribute('data-font-style', 'sans-serif');
  return (
    <div className="App">
      <Container>
        <Header></Header>
      </Container>
    </div>
  );
}

export default App;
