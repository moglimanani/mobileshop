import { createContext } from "react";

const ThemeContext = createContext({theme: '', setTheme: (_val: string)=> {} })

export default ThemeContext;