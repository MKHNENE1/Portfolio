/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyWork from "./MyWork";
import Contact from "./Contact";
import { CssBaseline } from "@mui/material";
import Button from "@mui/material/Button";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <MyWork></MyWork>
      <Contact></Contact>
    </>
  );
}

export default App;
