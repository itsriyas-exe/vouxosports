import React from "react";
import '../styles/matchdetails.css';
import { MdLiveTv } from "react-icons/md";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaPlay } from "react-icons/fa";

const MatchDetails = () => {
  const matchInfo = {
    teams: "Mallorca vs Barcelona",
    time: {
      IST: "11:30 PM",
      GST: "10:00 PM",
      SST: "09:00 PM",
    },
    stadium: "Son Moix Stadium",
    league: "LaLiga",
    round: "Round 19",
    lineup: {
      mallorca: "Leo Román; Maffeo, Raillo, Valjent, Mojica; Morlanes, Samu; Antonio, Darder, Valery; Muriqi",
      barcelona: "Iñaki Peña; Koundé, Cubarsi, Iñigo Martinez, Balde; Casadó, Pedri; Lamine Yamal, Dani Olmo, Raphinha; F. Torres",
    },
  };

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="match-detailss"
      initial="hidden"
      animate="visible"
    >
      <Header />

      {/* Match Header */}
      <motion.div className="header" variants={fadeIn}>
        <h3>{matchInfo.teams}</h3>
        <p>
          <MdLiveTv size={25} color="red" />
        </p>
        <img
          src="https://www.fcbarcelona.com/photo-resources/2023/12/01/d571d426-6a6b-40a1-b3f9-d18266958fc8/_GP21487.jpg?width=1200&height=750"
          alt=""
          width={"250px"}
          className="rounded"
        />
      </motion.div>

      {/* Match Info Grid */}
      <motion.div className="match-infoo" variants={fadeIn}>
        <div className="info-row">
          <span>Time (IST):</span>
          <span>{matchInfo.time.IST}</span>
        </div>
        <div className="info-row">
          <span>Time (GST):</span>
          <span>{matchInfo.time.GST}</span>
        </div>
        <div className="info-row">
          <span>Time (SST):</span>
          <span>{matchInfo.time.SST}</span>
        </div>
        <div className="info-row">
          <span>Stadium:</span>
          <span>{matchInfo.stadium}</span>
        </div>
        <div className="info-row">
          <span>League:</span>
          <span>{matchInfo.league}</span>
        </div>
        <div className="info-row">
          <span>Round:</span>
          <span>{matchInfo.round}</span>
        </div>
      </motion.div>

      {/* Lineup Section */}
      <motion.div className="section" variants={slideIn}>
        <h2>Match Lineup</h2>
        <p><strong>Mallorca XI:</strong> {matchInfo.lineup.mallorca}</p>
        <p><strong>Barcelona XI:</strong> {matchInfo.lineup.barcelona}</p>
      </motion.div>

      {/* Match Live Info */}
      <motion.div className="section live-info" variants={fadeIn}>
        <h2>Watch Live Now</h2>
        <Link to={'/watch'}>
          <button className="live-button"><FaPlay className="me-3"/>Click Here</button>
        </Link>
        <p>{matchInfo.teams}</p>
      </motion.div>

      {/* Match Preview */}
      {/* <motion.div className="section" variants={slideIn}>
        <h2>Match Preview</h2>
        <p><strong>Mallorca XI:</strong> {matchInfo.lineup.mallorca}</p>
        <p><strong>Barcelona XI:</strong> {matchInfo.lineup.barcelona}</p>
      </motion.div> */}

      <Footer />
    </motion.div>
  );
};

export default MatchDetails;
