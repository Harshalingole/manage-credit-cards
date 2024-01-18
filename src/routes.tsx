import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import { History } from "./pages/History";
import CardDetail from "./pages/CardDetail";

const IndexRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="history" element={<History />} />
          <Route path="menu" element={<h1>Menu</h1>} />
          <Route path="card-detail" element={<CardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoutes;
