/* import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUsers, FaTv, FaCalendarAlt, FaCrown, FaDoorOpen } from 'react-icons/fa';

const Admin = () => {
  return (
    <StyledWrapper style={{height:'100vh'}}>
      <div className="dashboard-container">
        <aside className="sidebar">
        <div className="logo">Admin Panel</div>
          <nav>
            <ul>
              <li>
                <Link to="/user-management">
                  <FaUsers /> User Management
                </Link>
              </li>
              <li>
                <Link to="/live-management">
                  <FaTv /> Live Management
                </Link>
              </li>
              <li>
                <Link to="/schedule-matches">
                  <FaCalendarAlt /> Schedule Matches
                </Link>
              </li>
              <li>
                <Link to="/manage-subscription">
                  <FaCrown /> Manage Subscriptions
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaDoorOpen /> Log out
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="content">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Select an option from the menu to get started.</p>
        </main>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .dashboard-header {
    background: #2b2b2b;
    color: #fff;
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .dashboard-container {
    display: flex;
    height: 100vh;
  }

  .sidebar {
    background: #1e1e1e;
    color: #fff;
    width: 250px;
    padding: 1rem;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
  }

  .sidebar li {
    margin: 1rem 0;
  }

  .sidebar a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    transition: background 0.3s;
  }

  .sidebar a:hover {
    background: #444;
  }

  .content {
    flex: 1;
    padding: 2rem;
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    .dashboard-container {
      flex-direction: column;
    }

    .sidebar {
      width: 100%;
    }

    .content {
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    .dashboard-header {
      font-size: 1.2rem;
    }

    .sidebar li {
      margin: 0.5rem 0;
    }

    .sidebar a {
      font-size: 0.9rem;
    }
  }
`;

export default Admin;
 */
import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import Favorites from "../components/Favorites";
import Livematches from "../components/LiveMatches";
import Upcomingmatches from "../components/UpcomingMatches";
import Footer from "../components/Footer";
import PointTable from "../components/PointTable";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import UserManagement from "../components/UserManagement";
import LiveManagement from "../components/LiveManagement";
import ScheduleMatches from "../components/ScheduleMatches";
import ManageSubscription from "../components/ManageSubscription";
import UserReports from "../components/UserReports";

function Admin() {
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
      <header className="dashboard-header" style={{backgroundColor:'black'}}>
       <Link to={'/home'} className="logolink"><div className="logo">VouxoSports</div></Link>        
       <nav className="nav-options" style={{marginLeft:'50px'}}>
          <button
            className={activeTab === "liveMatches" ? "active" : ""}
            onClick={() => handleTabChange("liveMatches")}
          >
            User Management
          </button>
          <button
            className={activeTab === "upcomingMatches" ? "active" : ""}
            onClick={() => handleTabChange("upcomingMatches")}
          >
           Live Management
          </button>
          <button
            className={activeTab === "leagueTable" ? "active" : ""}
            onClick={() => handleTabChange("leagueTable")}
          >
            Schedule Matches
          </button>
          <button
            className={activeTab === "favorites" ? "active" : ""}
            onClick={() => handleTabChange("favorites")}
          >
            Manage Subscription
          </button>
          <button
            className={activeTab === "UserReports" ? "active" : ""}
            onClick={() => handleTabChange("UserReports")}
          >
            User Reports
          </button>
        </nav>
        <div className="search-bar">
          <Link to={'/'}><button><CiLogout />  Logout</button></Link>
        </div>
      </header>
      {/* Content Section */}
      <main className="dashboard-content">
        {activeTab === "liveMatches" && (
          <div className="content-section">
            <UserManagement/>
            {/* Add live match cards or streams here */}
          </div>
        )}

        {activeTab === "upcomingMatches" && (
          <div className="content-section">
           <LiveManagement/>
            {/* Add upcoming match details here */}
          </div>
        )}

        {activeTab === "leagueTable" && (
          <div className="content-section">
            <ScheduleMatches/>
            {/* Add league table content here */}
          </div>
        )}

        {activeTab === "favorites" && (
          <div className="content-section">
           <ManageSubscription/>
            {/* Add favorite items here */}
          </div>
        )}

        {activeTab === "UserReports" && (
          <div className="content-section">
           <UserReports/>
            {/* Add favorite items here */}
          </div>
        )}
      </main>
    </div>
  );
}

export default Admin;

