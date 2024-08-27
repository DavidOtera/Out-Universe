import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);  
  };

  const handleNewOutlet = () => {
    // Navigate to the NewOutlets page
    navigate("/new-outlet");
  };

  const handleQuickOutlet = () => {
    navigate("/quickoutlets");
  };

  const handleRegions = () => {
    navigate("/regions");
  };

  const handleGeoEntities = () => {
    navigate("/geo_entities");
  };

  const handleRefresh = () => {
    console.log("Refresh Data");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Master Universe</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="buttons-container">
        <button className="btn new-outlet-btn" onClick={handleNewOutlet}>
          New Outlet
        </button>
        <button className="btn quick-outlet-btn" onClick={handleQuickOutlet}>
          Quick Outlet
        </button>
        <button className="btn regions-btn" onClick={handleRegions}>
          Regions
        </button>
        <button className="btn geo-entities-btn" onClick={handleGeoEntities}>
          Geo-Entities
        </button>
        <button className="btn refresh-btn" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
      <div className="table-container">
        <table className="outlets-table">
          <thead>
            <tr>
              <th>Title 1</th>
              <th>Title 2</th>
              <th>Title 3</th>
              <th>Title 4</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
            <tr>
              <td>Data 5</td>
              <td>Data 6</td>
              <td>Data 7</td>
              <td>Data 8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
