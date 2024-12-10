import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
   <>
      <div className="homepage">
        {/* Background Section */}
        <div className="background">
          <header className="navbar">
            <div className="logo">VouxoSports</div>
            <nav className="nav-links">
              <a href="#new">News</a>
              <a href="#popular">Sports</a>
              <a href="#pricing">Pricing</a>
              <a href="#guide">About Us</a>
            </nav>
            <div className="auth-buttons">
              <Link to={'/login'}><Button variant="warning">Sign In</Button></Link>
            </div>
          </header>
          {/* Main Content */}
          <div className="content">
            <h1>Welcome to VouxoSports</h1>
            <h1>The ultimate destination for live sports!</h1>
            <p>
              Enjoy seamless, high-definition live streams of your favorite sports
              events without interruptions.
            </p>
            <div className="buttons">
              <Link to={'/home'}>
                <Button variant="outline-warning" className="btn-discover">
                  Discover Streams & Fixtures
                </Button>
              </Link>
              <Link to={'./register'}>
                <Button variant="outline-success" className="btn-features">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <footer style={{backgroundColor:'transparent'}}>
          <p className="text-secondary">© VouxoSports 2024 All rights reserved. </p>
        </footer>
      </div>
   </>
  );
}

export default Home;
