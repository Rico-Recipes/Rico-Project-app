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
    img_src: 'https://thegourmetinsider.com/wp-content/uploads/2020/09/chilaquiles-rojos-1200x675_01.jpg',
    recipe: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 2,
    title: 'overnight oats',
    type: 'breakfast',
    img_src: 'https://flavorthemoments.com/wp-content/uploads/2022/02/blueberry-overnight-oats-2.jpg',
    recipe: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 3,
    title: 'eggs benedict',
    type: 'breakfast',
    img_src: 'https://www.carolinescooking.com/wp-content/uploads/2019/03/eggs-Benedict-photo.jpg',
    recipe: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 4,
    title: 'boring ham sandwich',
    type: 'lunch',
    img_src: 'https://hips.hearstapps.com/hmg-prod/images/190322-ham-sandwich-horizontal-1553721016.png',
    recipe: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 5,
    title: 'dry meat loaf',
    type: 'dinner',
    img_src: 'https://assets.epicurious.com/photos/57eab27ecf9338f824b78b4b/master/w_1000,h_667,c_limit/old-fashioned-meat-loaf.jpg',
    recipe: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 6,
    title: 'steak and potatoes',
    type: 'dinner',
    img_src: 'https://www.lecremedelacrumb.com/wp-content/uploads/2019/03/feat-500x500.jpg',
    recipe: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 7,
    title: 'caesar salad',
    type: 'lunch',
    img_src: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3-600x900.jpg',
    recipe: {
      ingredients: [],
      instructions: [],
    },
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
