import React from 'react';
import { Home } from './components/Home.js'
import HomepageNavbar from './components/HomepageNavbar'
import { Routes, Route } from 'react-router-dom'

import Recipes from './components/Recipes'
import RecipeType from './components/RecipeType.js';

const DUMMY_DATA = [
  {
    id: 1,
    title: 'chilaquiles',
    type: 'breakfast',
  },
  {
    id: 2,
    title: 'overnight oats',
    type: 'breakfast',
  },
  {
    id: 3,
    title: 'eggs benedict',
    type: 'breakfast',
  },
  {
    id: 4,
    title: 'boring ham sandwich',
    type: 'lunch',
  },
  {
    id: 5,
    title: 'dry meat loaf',
    type: 'dinner',
  },
  {
    id: 6,
    title: 'steak and potatoes',
    type: 'dinner',
  },
  {
    id: 7,
    title: 'caesar salad',
    type: 'lunch',
  }
]

function App() {
  return (

    <div className="App">
      <header className="App-header">
      </header>

      <HomepageNavbar />
      <Routes>
        <Route
          path=''
          element={<Home />}
        />
        <Route
          path='recipes'
          element={
            <Recipes data={DUMMY_DATA} />
          }
        />
        <Route
          path='recipes/:recipeType'
          element={
            <RecipeType data={DUMMY_DATA} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
