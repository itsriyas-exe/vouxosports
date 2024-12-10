import React from 'react';
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
