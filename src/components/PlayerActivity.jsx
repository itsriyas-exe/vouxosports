import React from "react";
import "../styles/player.css";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import { FaFlag } from "react-icons/fa";

const PlayerActivity = () => {
  return (
    <>
    <Header/>
        <div className="player-activity-container">
            
          {/* Left Section: Video Player */}
          <div className="video-player">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hJL1JVzf3GM?si=uW_rcxlweVT2eQMG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="d-flex text-center"><p>Live not working ?</p> <Button variant="outline-danger" className="ms-3" style={{height:'45px'}}><FaFlag className="me-3"/>Report</Button></div>
          </div>
    
          {/* Right Section: Chat Section */}
          <div className="chat-section">
            <h5>Live Chat</h5>
            <div className="chat-box">
              {/* Sample chat messages */}
              <div className="message"><strong>User1:</strong> Hello everyone!</div>
              <div className="message"><strong>User2:</strong> This game is awesome!</div>
              <div className="message"><strong>User3:</strong> Wow, what a play!</div>
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                className="input-field"
              />
              <button className="send-btn">Send</button>
            </div>
          </div>
          
        </div>
        <Footer/>
    </>
  );
};

export default PlayerActivity;
