import React, { memo } from 'react';

const Todo = ({ id, text, completed, dispatch }) => (
    <div key={id}>
        <p style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={() => dispatch({ type: 'TOGGLE', payload: id })}>{text}</p>
        <button onClick={() => dispatch({ type: 'DELETE', payload: id})}>Delete</button>
    </div>
)

export default memo(Todo);