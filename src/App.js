import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Sharedlayout from "./components/Sharedlayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route index element={<Homepage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
