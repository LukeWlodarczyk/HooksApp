import React, { useContext, useEffect } from 'react';

import { ThemeContext } from '../App.js';

const Theme = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.title = "Change app's theme";
    }, [])

    return (
        <>
            <p style={{ backgroundColor: theme === 'Light' ? 'orange' : 'darkblue' }}>Current theme: {theme}</p>
            <button onClick={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}>Toggle theme</button>
        </>
    )

}

export default Theme;