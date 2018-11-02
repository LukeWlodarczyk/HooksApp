import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../App.js';

const Header = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <ul style={{ backgroundColor: theme === 'Light' ? 'orange' : 'darkblue' }} >
            <li>
                <Link to='/'>Counter</Link>
            </li>
            <li>
                <Link to='/lazy'>Code splitting</Link>
            </li>
            <li>
                <Link to='/todos'>Todos</Link>
            </li>
            <li>
                <Link to='/context'>Using context</Link>
            </li>
        </ul>
    )
}

export default Header;