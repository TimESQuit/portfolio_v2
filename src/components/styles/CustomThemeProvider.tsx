import React from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@material-ui/core";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const tallAppBar = useMediaQuery("(min-width:600px)");
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#37474f",
        light: "#62727b",
        dark: "#102027",
      },
      secondary: {
        main: "#bf360c",
        light: "#f9683a",
        dark: "#870000",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            WebkitFontSmoothing: "auto",
            scrollBehavior: "smooth",
            scrollPaddingTop: `${tallAppBar ? 64 : 56}px`,
            boxSizing: "border-box",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
