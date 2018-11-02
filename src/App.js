import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Theme from './components/Theme';

const LazyHello = lazy(() => import('./components/Hello'))


export const ThemeContext = React.createContext({});

const App = () => {

  const [theme, setTheme] = useState('Light')

  return (
    <div className="App ">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <>
            <Header />
            <Route exact path='/' component={Counter} />
            <Route path='/lazy' render={() => 
              <Suspense fallback={<p>Loading</p>} >
                <LazyHello />
              </Suspense>
            } />
            <Route path='/todos' component={TodoList} />
            <Route path='/context' component={Theme} />
          </>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
