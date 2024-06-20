import { createContext, useEffect, useState } from "react";
import { LayoutComponentProps } from "../components/layout/LayoutComponent.props";
import { ThemeProviderContext, ThemeProviderFontStyle } from "./ThemeProvider.types";

const ThemeContext = createContext<ThemeProviderContext>({
    isDark: false,
    fontStyle: 'sans-serif'
});
const ThemeProvider = ({ children }: LayoutComponentProps) => {
    const [isDark, setIsDark] = useState(false)
    const [fontStyle, setFontStyle] = useState<ThemeProviderFontStyle>('sans-serif')

    useEffect(() => {
        console.log('my useEffect')
    }, [isDark, fontStyle]);

    const toggleTheme = () => setIsDark(previousValue => !previousValue)

    const updateFontStyle = (fontStyle: ThemeProviderFontStyle) => setFontStyle(fontStyle);

    const providerValue = {
        isDark,
        fontStyle,
    };

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;