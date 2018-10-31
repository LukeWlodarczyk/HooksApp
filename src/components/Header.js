import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => (
    <ul>
        <li>
            <Link to='/lazy'>Code splitting</Link>
        </li>
        <li>
            <Link to='/todos'>Todos</Link>
        </li>
    </ul>
)

export default Header;