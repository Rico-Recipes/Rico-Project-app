import React from 'react';
import { Home } from './components/Home.js'
import HomepageNavbar from './components/HomepageNavbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <header className="App-header">
      </header>

      <HomepageNavbar />
      <Routes>
        <Route path='' element={<Home />}/>
        {/* <Route path='recipes' element={<Recipes />}/> */}
      </Routes>
    </div>
  );
}

export default App;
