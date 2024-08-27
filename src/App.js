import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home/home";
import NewOutlets from "./Outlets/newoutlets";
import Regions from "./Regions/regions";
import GeoEntities from "./Geo_Entities/geo_entities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-outlet" element={<NewOutlets />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/geo_entities" element={<GeoEntities />} />
      </Routes>
    </Router>
  );
}

export default App;