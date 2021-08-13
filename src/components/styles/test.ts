declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    customthing: string;
  }
  interface ThemeOptions {
    customthing?: string;
  }
}
const theme = createMuiTheme({ customthing: "red", ...otherOverRides });
