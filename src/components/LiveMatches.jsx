import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion

const Livematches = () => {
  const matches = [
    {
      id: 1,
      team1: {
        name: "Mallorca",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAG9nM9A3hDbJ8bWxIlbAPG-IkK7kXjJEng&s",
      },
      team2: {
        name: "Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png",
      },
      time: "10:00 PM",
      league: "La Liga",
      round: "Round 19",
      broadcaster: "VouxoSports",
    },
    {
      id: 2,
      team1: {
        name: "Al Hilal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Al-hilal_logo.png",
      },
      team2: {
        name: "Al Gharafa",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Al-Gharafa_SC_logo.svg",
      },
      time: "10:00 PM",
      league: "AFC Champions League",
      round: "Round 6",
      broadcaster: "VouxoSports",
    },
    {
      id: 3,
      team1: {
        name: "Bayern Munich",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
      },
      team2: {
        name: "Bayer Leverkusen",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc6OvB29gnQ3KSARysjXciSzUjBvTA8llug&s",
      },
      time: "11:45 PM",
      league: "DFB Pokal",
      round: "Round of 16",
      broadcaster: "VouxoSports",
    },
    {
      id: 4,
      team1: {
        name: "Kerala Blasters",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Kerala_Blasters_FC_logo.svg/1200px-Kerala_Blasters_FC_logo.svg.png",
      },
      team2: {
        name: "Chennaiyin FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Chennaiyin_FC_logo.svg/1200px-Chennaiyin_FC_logo.svg.png",
      },
      time: "11:45 PM",
      league: "Indian Super League",
      round: "Round of 16",
      broadcaster: "VouxoSports",
    },
  ];

  return (
    <div className="app-container">
      {matches.map((match) => (
        <motion.div
          key={match.id}
          className="match-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: match.id * 0.2 }}
        >
          <Link to={"/details"} className="linkSec">
            <div className="team">
              <img src={match.team1.logo} alt={match.team1.name} className="team-logo" />
              <p className="team-name">{match.team1.name}</p>
            </div>
            <div className="match-info">
              <p className="time">{match.time}</p>
              <p className="vs">VS</p>
              <p className="broadcaster">📺 {match.broadcaster}</p>
            </div>
            <div className="team">
              <img src={match.team2.logo} alt={match.team2.name} className="team-logo" />
              <p className="team-name">{match.team2.name}</p>
            </div>
            <div className="match-details">
              <p>🏆 {match.league}</p>
              <p>🔍 {match.round}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Livematches;
