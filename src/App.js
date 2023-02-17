import React, { useState } from 'react';
import { Home } from './components/Home.js'
import HomepageNavbar from './components/HomepageNavbar'
import { Routes, Route } from 'react-router-dom'

import Recipes from './components/Recipes'
import RecipeType from './components/RecipeType.js';
import Recipe from './components/Recipe';
import Footer from './components/Footer.js';

const DUMMY_DATA = [
  {
    id: 1,
    title: 'chilaquiles',
    type: 'breakfast',
    img_src: 'https://thegourmetinsider.com/wp-content/uploads/2020/09/chilaquiles-rojos-1200x675_01.jpg',
    recipe_info: {
      ingredients: ['1/4 cup vegetable oil, for frying', '12 corn tortillas, cut into 8 wedges each', 'Kosher salt', '4 Roma tomatoes or 2 large tomatoes (about 1 1/2 pounds), chopped', '1/2 large yellow onion, chopped', '1 medium jalapeño, sliced (remove the seeds for a less spicy dish)', '2 cloves garlic', '1 1/4 cups low-sodium chicken or vegetable broth, divided', 'Avocado or guacamole', 'Crema', 'Queso fresco', 'Fried eggs'],
      instructions: ['Fry the tortillas. Heat 1/4 cup oil in a large skillet over medium-high heat until shimmering. Add about a quarter of the tortilla wedges and cook, flipping once, until lightly brown and crisp.', 'Drain the tortilla chips. Drain the freshly fried tortilla chips on a paper towel-lined baking sheet. Sprinkle lightly with salt. Repeat this process until all tortillas are fried, adding more oil if needed.', 'Make the salsa roja. Place the tomatoes, onion, jalapeño, and garlic in a blender or food processor fitted with the blade attachment. Pour in 1 cup of the broth. Blend until smooth.', 'Cook the salsa. Heat 2 teaspoons oil in a large skillet over medium-high heat until shimmering. Add the salsa and cook, stirring occasionally, until slightly thickened, 5 to 10 minutes (the consistency of the salsa will vary depending on the size and juiciness of the tomatoes). Add additional broth to thin out the salsa, if needed. Taste and season with salt as needed.', 'Coat the chips with the salsa. Add the tortilla chips and stir carefully to coat the chips. Cook until the tortillas are heated through, about 3 minutes. Taste and season with salt as needed.', 'Serve warm. Serve warm garnished with avocado or guacamole, crema, queso fresco, and/or fried eggs, if desired.'],
    },
  },
  {
    id: 2,
    title: 'overnight oats',
    type: 'breakfast',
    img_src: 'https://flavorthemoments.com/wp-content/uploads/2022/02/blueberry-overnight-oats-2.jpg',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 3,
    title: 'eggs benedict',
    type: 'breakfast',
    img_src: 'https://www.carolinescooking.com/wp-content/uploads/2019/03/eggs-Benedict-photo.jpg',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 4,
    title: 'boring ham sandwich',
    type: 'lunch',
    img_src: 'https://hips.hearstapps.com/hmg-prod/images/190322-ham-sandwich-horizontal-1553721016.png',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 5,
    title: 'dry meat loaf',
    type: 'dinner',
    img_src: 'https://assets.epicurious.com/photos/57eab27ecf9338f824b78b4b/master/w_1000,h_667,c_limit/old-fashioned-meat-loaf.jpg',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 6,
    title: 'caesar salad',
    type: 'lunch',
    img_src: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 7,
    title: 'steak and potatoes',
    type: 'dinner',
    img_src: 'https://www.lecremedelacrumb.com/wp-content/uploads/2019/03/feat-500x500.jpg',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  }
]

function App() {

  const [filteredRecipesList, setFilteredRecipesList] = useState([...DUMMY_DATA]);
  const [search, setSearch] = useState('');

  const handleRecipeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (search.length) {
      const regex = new RegExp(search, 'gi');
      const filtered = DUMMY_DATA.filter(recipe => {
        return recipe.title.match(regex) || recipe.title.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredRecipesList(filtered);
    } else {
      setFilteredRecipesList([...DUMMY_DATA]);
    }
  }

  return (

    <div className="App">
      <header className="App-header">
      </header>

      <HomepageNavbar handleRecipeSearch={handleRecipeSearch} handleSubmit={handleSubmit} />
      <Routes>
        <Route
          path=''
          element={<Home />}
        />
        <Route
          path='recipes'
          element={
            <Recipes data={filteredRecipesList} />
          }
        />
        <Route
          path='recipes/:recipeType'
          element={
            <RecipeType data={filteredRecipesList} />
          }
        />
        <Route
          path='recipes/breakfast/chilaquiles'
          element={
            <Recipe recipeData={DUMMY_DATA[0]} />
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
