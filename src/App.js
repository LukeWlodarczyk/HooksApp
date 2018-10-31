import React, { Component, Suspense, lazy } from 'react';

import Counter from './components/Counter';

const LazyHello = lazy(() => import('./components/Hello'))

class App extends Component {
  render() {
    return (
      <div className="App ">
       <Counter />
       <Suspense fallback={<p>Loading</p>} >
        <LazyHello />
       </Suspense>
     
      </div>
    );
  }
}

export default App;
