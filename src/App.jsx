import "./App.css";
import MyWork from "./MyWork";
import Contact from "./Contact";
import Hero from "./Hero";
import { CssBaseline } from "@mui/material";
import CustomAppBar from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <CustomAppBar></CustomAppBar>
      <Hero></Hero>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
