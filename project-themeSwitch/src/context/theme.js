import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    changeTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}