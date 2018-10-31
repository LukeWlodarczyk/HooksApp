import React, { useReducer, useState } from 'react';

let numberId = 0;

const todosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': return [action.payload, ...state];
        case 'DELETE': return state.filter(t => t.id !== action.payload);
        case 'TOGGLE': return state.map(t => {
            if(t.id === action.payload) {
                t.completed = !t.completed;
                return t;
            }
            return t;
        })
        default: return state;

    }
}


const TodoList = () => {
    const [todos, dispatch] = useReducer(todosReducer, []);
    const [todo, setTodo] = useState({ text: '', completed: false, id: numberId++ });

    const addTodo = () => {
        dispatch({ type: 'ADD', payload: todo })
        setTodo({ text: '', completed: false, id: numberId++ });
    }

    return (
        <>
        <input 
            type='text' 
            value={todo.text} 
            onChange={e => setTodo({ ...todo, text: e.target.value })} 
        />
        <button onClick={addTodo}>Add todo</button>
        {todos.map(t => (
            <div key={t.id}>
                <p style={{ textDecoration: t.completed ? 'line-through' : 'none' }} onClick={() => dispatch({ type: 'TOGGLE', payload: t.id })}>{t.text}</p>
                <button onClick={() => dispatch({ type: 'DELETE', payload: t.id})}>Delete</button>
            </div>
        ))}
        </>
    )
}

export default TodoList;