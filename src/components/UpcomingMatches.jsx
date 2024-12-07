import React from "react";
const Upcomingmatches = () => {
  const matches = [
    {
      id: 1,
      team1: {
        name: "Manchester City",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00CQEdgDX2xKPmWH0Ml9K_UKRL2p0z6k-vQ&s", // Replace with actual logo URL
      },
      team2: {
        name: "Nottingham Forest",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTxJRchnDE1K_KcDqvC08TFHIg55_kLYzKA&s", // Replace with actual logo URL
      },
      time: "11:30 PM",
      league: "Premier League",
      round: "Round 14",
      broadcaster: "VouxoSports",
    },
    {
      id: 2,
      team1: {
        name: "Al Hilal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Al-hilal_logo.png", // Replace with actual logo URL
      },
      team2: {
        name: "Al Gharafa",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Al-Gharafa_SC_logo.svg", // Replace with actual logo URL
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
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/2048px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png", // Replace with actual logo URL
      },
      team2: {
        name: "Bayer Leverkusen",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc6OvB29gnQ3KSARysjXciSzUjBvTA8llug&s", // Replace with actual logo URL
      },
      time: "11:45 PM",
      league: "DFB Pokal",
      round: "Round of 16",
      broadcaster: "VouxoSports",
    },
  ];

  return (
    <div className="app-container">
      {matches.map((match) => (
        <div key={match.id} className="match-card">
          <div className="team">
            <img src={match.team1.logo} alt={match.team1.name} className="team-logo" />
            <p className="team-name">{match.team1.name}</p>
          </div>
          <div className="match-info">
            <p className="time">{match.time}</p>
            <p className="vs">VS</p>
            <p className="broadcaster">
              📺 {match.broadcaster}
            </p>
          </div>
          <div className="team">
            <img src={match.team2.logo} alt={match.team2.name} className="team-logo" />
            <p className="team-name">{match.team2.name}</p>
          </div>
          <div className="match-details">
            <p>🏆 {match.league}</p>
            <p>🔍 {match.round}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcomingmatches;
