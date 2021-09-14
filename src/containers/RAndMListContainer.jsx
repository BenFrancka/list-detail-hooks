import React, { useState, useEffect } from 'react';
import ListOfCharacters from '../components/characters/ListOfCharacters';
import { fetchCharacterData } from '../services/RAndMApi';

const RAndMListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacterData()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  if(loading) {
    return (
      <img
        src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
        alt="loading spinner"
      />
    );
  }
  return <ListOfCharacters characters={characters} />;
};

export default RAndMListContainer;
