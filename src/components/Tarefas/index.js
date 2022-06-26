import React from 'react';
import propTypes from 'prop-types';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({ handleEdit, handleDelete, tarefas }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className="edit"
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>

        </li>
      ))}
    </ul>

  );
}

Tarefas.propTypes = {
  handleDelete: propTypes.func.isRequired,
  handleEdit: propTypes.func.isRequired,
  tarefas: propTypes.array.isRequired,
};
