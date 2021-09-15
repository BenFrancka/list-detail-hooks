import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line max-len
import CharacterDetailDisplay from '../components/characters/CharacterDetailDisplay';
import { fetchCharacterById } from '../services/RAndMApi';

const RAndMDetailContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacterById(id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main>
      <Link to="/">Portal to Homepage</Link>
      {loading ? (
        <img
          src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
          alt="loading spinner"
        />
      ) : (
        <CharacterDetailDisplay
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
        />
      )}
    </main>
  );
};

export default RAndMDetailContainer;
