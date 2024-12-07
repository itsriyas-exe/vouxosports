import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

const Favorites = () => {
  const [favoriteTeams, setFavoriteTeams] = useState([
    { id: 1, title: 'Team A', image: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png' },
    { id: 2, title: 'Team B', image: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png' },
    { id: 3, title: 'Team C', image: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png' },
    { id: 4, title: 'Team D', image: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png' },
  ]);

  const removeFromFavorites = (id) => {
    setFavoriteTeams(favoriteTeams.filter((team) => team.id !== id));
  };

  /* Dropdown */
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Animation Variants
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <div className="app-container">
      <h3 className="heading text-secondary">Favorite Teams</h3>

      {/* Dropdown Section */}
      <div className="d-flex w-75 align-items-center mb-4">
        <label htmlFor="dropdown" className="text-secondary me-2">
          Add your favorite teams:
        </label>
        <select
          id="dropdown"
          className="form-control"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="">Select a Team</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Kerala Blasters">Kerala Blasters</option>
          <option value="Real Madrid">Real Madrid</option>
          <option value="Bayern Munich">Bayern Munich</option>
        </select>
        {selectedOption && <p className="ms-3">You selected: {selectedOption}</p>}
        <Button className="ms-2">ADD</Button>
      </div>

      {/* Grid Container with Animation */}
      <div className="grid-container">
        <AnimatePresence>
          {favoriteTeams.map((team) => (
            <motion.div
              key={team.id}
              className="grid-item"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img src={team.image} alt={team.title} className="team-image" />
              <h2 className="team-title">{team.title}</h2>
              <button
                className="remove-button"
                onClick={() => removeFromFavorites(team.id)}
              >
                Remove from Favorites
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Favorites;
