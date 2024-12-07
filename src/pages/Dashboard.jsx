import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Favorites from "../components/Favorites";
import Livematches from "../components/LiveMatches";
import Upcomingmatches from "../components/UpcomingMatches";
import Footer from "../components/Footer";
import PointTable from "../components/PointTable";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("liveMatches");

  // Handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  /* Carousal */
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel images
  const images = [
    "https://www.fcbarcelona.com/photo-resources/2023/01/12/fa80bebe-5b33-4abf-b519-d8486a154771/mini_escuts-final.jpg?width=624&height=368",
    "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/08/03/17227202414043.jpg",
    "https://images.supersport.com/media/lfvofv02/1200x675-man-city-vs-liverpool-montage.jpg",
  ];

  // Change slide automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
       <Link to={'/home'} className="logolink"><div className="logo">VouxoSports</div></Link>        
       <nav className="nav-options">
          <button
            className={activeTab === "liveMatches" ? "active" : ""}
            onClick={() => handleTabChange("liveMatches")}
          >
            Live Matches
          </button>
          <button
            className={activeTab === "upcomingMatches" ? "active" : ""}
            onClick={() => handleTabChange("upcomingMatches")}
          >
            Upcoming Matches
          </button>
          <button
            className={activeTab === "leagueTable" ? "active" : ""}
            onClick={() => handleTabChange("leagueTable")}
          >
            Point Table
          </button>
          <button
            className={activeTab === "favorites" ? "active" : ""}
            onClick={() => handleTabChange("favorites")}
          >
            Favorites
          </button>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for matches, leagues, teams..." />
          <button>Search</button>
          <FaRegUserCircle size={25} className="mt-1 ms-3"/>
        </div>
      </header>
      {/* Content Section */}
      <main className="dashboard-content">
        {activeTab === "liveMatches" && (
          <div className="content-section">
            {/* Carousal */}
  <div className="carousel-container">
      <div
        className="carousel-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Carousel Controls */}
      <div className="carousel-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
            <Livematches/>
            {/* Add live match cards or streams here */}
          </div>
        )}

        {activeTab === "upcomingMatches" && (
          <div className="content-section">
            <Upcomingmatches/>
            {/* Add upcoming match details here */}
          </div>
        )}

        {activeTab === "leagueTable" && (
          <div className="content-section">
            <PointTable/>
            {/* Add league table content here */}
          </div>
        )}

        {activeTab === "favorites" && (
          <div className="content-section">
            <Favorites/>
            {/* Add favorite items here */}
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default Dashboard;