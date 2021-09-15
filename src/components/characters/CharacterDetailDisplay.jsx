import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetailDisplay = ({ image, name, status, species }) => (
  <>
    <ul aria-label="character details">
      <li>
        <img src={image} alt={name} />
      </li>
      <li>{name}</li>
      <li>{status}</li>
      <li>{species}</li>
    </ul>
  </>
);

CharacterDetailDisplay.propTypes = {
  character: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })
  ),
};

export default CharacterDetailDisplay;
