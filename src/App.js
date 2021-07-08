import "./App.css";
import Navbar from "./components/Navbar";

import {
  createMuiTheme,
  CssBaseline,
  Grid,
  makeStyles,
} from "@material-ui/core";

import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";

import MyDrawer from "./components/MyDrawer";
import Main from "./components/Main";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c00",
    },
    secondary: {
      main: "#606060",
      light: "#f8f8f8",
    },

    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  drawer: {},

  main: {
    overflowY: "scroll",
  },
}));

function App() {
  const [ExpandMenu, setExpandMenu] = useState(true);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div>
          <Navbar ExpandMenu={ExpandMenu} setExpandMenu={setExpandMenu} />
          <MyDrawer ExpandMenu={ExpandMenu} />

          <Main ExpandMenu={ExpandMenu} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
