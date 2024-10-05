import Header1 from "./components/Header1"
import Header2 from "./components/Header2"
import Header3 from "./components/Header3"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/Hero";
import IconSection from "./components/IconSection";
import Main from "./components/Main"
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ToastContainer />

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
          <Hero />
          <IconSection />
          <Main />
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>

    </>




  )
}

export default App
