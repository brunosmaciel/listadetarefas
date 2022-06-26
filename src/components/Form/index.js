import React from 'react';
import propTypes from 'prop-types';
import './Form.css';

import { FaPlus } from 'react-icons/fa';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form action="#" method="POST" className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>

  );
}

Form.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  novaTarefa: propTypes.string.isRequired,
};
