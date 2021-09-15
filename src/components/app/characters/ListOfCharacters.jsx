import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';
import { Link } from 'react-router-dom';

const ListOfCharacters = ({ characters }) => (
  <ul aria-label="character-list">
    {characters.map((character) => (
      <Link key={character.id} to={`/${character.id}`}>
        <li key={character.id}>
          <CharacterListItem image={character.image} name={character.name} />
        </li>
      </Link>
    ))}
  </ul>
);

ListOfCharacters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default ListOfCharacters;

