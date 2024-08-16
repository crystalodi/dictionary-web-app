import { createContext, useState, useEffect } from "react";
import Search from "../content/search";
import Container from "../layout/container";
import Header from "../layout/header";
type ThemeContextType = {
  theme: boolean;
  updateTheme: (value: boolean) => void;
  fontStyle: string;
  updateFontStyle: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
function App() {
  const [theme, setTheme] = useState(false);
  const [fontStyle, setFontStyle] = useState('serif')
  useEffect(() => {
    console.log(theme);
    console.log(fontStyle);
  }, [theme, fontStyle])
  const updateTheme = (value: boolean) => {
    setTheme(value);
  }
  const updateFontStyle = (value: string) => {
    setFontStyle(value)
  }
  return (
    <ThemeContext.Provider value={{ theme, updateTheme, fontStyle, updateFontStyle }}>
      <Container>
        <Header/>
        <Search/>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
