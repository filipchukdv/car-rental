import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Sharedlayout from "./components/Sharedlayout";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Manrope,sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route index element={<Homepage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
