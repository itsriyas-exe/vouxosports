import React, { useState } from "react";

const PointTable = () => {
  const tableData = [
    { position: 1, team: "Liverpool", matches: 13, wins: 11, draws: 1, losses: 1, goalsFor: 26, goalsAgainst: 8, goalDifference: 18, points: 34 },
    { position: 2, team: "Chelsea", matches: 13, wins: 7, draws: 4, losses: 2, goalsFor: 26, goalsAgainst: 14, goalDifference: 12, points: 25 },
    { position: 3, team: "Arsenal", matches: 13, wins: 7, draws: 4, losses: 2, goalsFor: 26, goalsAgainst: 14, goalDifference: 12, points: 25 },
    // Add the remaining rows here following the same format
    { position: 20, team: "Southampton", matches: 13, wins: 1, draws: 2, losses: 10, goalsFor: 10, goalsAgainst: 25, goalDifference: -15, points: 5 },
  ];

   /* Dropdown */
   const [selectedOption, setSelectedOption] = useState(''); 
   const handleChange = (event) => { setSelectedOption(event.target.value);
 };

  return (
    <div className="league-table-container">
      <h2>Point Table</h2>
      <div> <label htmlFor="dropdown" className="text-secondary">Choose an League:</label> <select id="dropdown" value={selectedOption} onChange={handleChange}> <option value="">Premier League</option> <option value="option1">La Liga</option> <option value="option2">AFC Champions League</option> <option value="option3">Indian Super League</option> </select> {selectedOption && <p>You selected: {selectedOption}</p>}</div>
      <div className="table-wrapper">
        <table className="league-table">
          <thead>
            <tr>
              <th>P</th>
              <th>Team</th>
              <th>M</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>G+</th>
              <th>G-</th>
              <th>GD</th>
              <th>P</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.position}>
                <td>{row.position}</td>
                <td>{row.team}</td>
                <td>{row.matches}</td>
                <td>{row.wins}</td>
                <td>{row.draws}</td>
                <td>{row.losses}</td>
                <td>{row.goalsFor}</td>
                <td>{row.goalsAgainst}</td>
                <td>{row.goalDifference}</td>
                <td>{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointTable;
