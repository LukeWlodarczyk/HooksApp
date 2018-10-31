import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

const LazyHello = lazy(() => import('./components/Hello'))

class App extends Component {
  render() {
    return (
      <div className="App ">
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
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
