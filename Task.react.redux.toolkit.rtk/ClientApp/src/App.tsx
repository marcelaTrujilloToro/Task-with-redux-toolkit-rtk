import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ColorModeContext from "./contexts/ColorModeContext";
import { AppRuter } from "./routes/AppRuter";


export default () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: "Avenir",
        },
      }),
    [mode]
  );
  return (
  
      <ColorModeContext.Provider value={{ toggleColorMode }}>
        <ThemeProvider theme={theme}>
          <AppRuter />
        </ThemeProvider>
      </ColorModeContext.Provider>
     
  );
};