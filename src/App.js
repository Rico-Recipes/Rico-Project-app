import React, { useState } from 'react';
import { Home } from './components/Home.js'
import HomepageNavbar from './components/HomepageNavbar'
import { Routes, Route } from 'react-router-dom'

import Recipes from './components/Recipes'
import RecipeType from './components/RecipeType.js';
import Recipe from './components/Recipe';

const worldTourRecipes = [
  {
    id: 8,
    title: 'spaghetoni profumati',
    type: 'italy',
    img_src: 'https://rms.condenast.it/rms/public/5d3/f08/7e8/thumb_2859_1200_670_0_0_auto.jpg',
    recipe_info: {
      ingredients: ['1 LB.of thick spaghetti','4 OZ.of homestyle bread(any crusty bread)',
        '1 / 2 CUP of Grana Padano cheese, grated','2 OZ.of mixed herbs(thyme, wild fennel, rosemary, mint, parsley, marjoram)','lemon','bay leaves','extra - virgin olive oil',
        'salt'],
      instructions: ['For the breadcrumbs: Chop the mixed herbs together. Heat the bread in a pan with a drizzle of oil and squeeze a bit of lemon juice on top. Remove the bread from the pan, season with about 1 oz. chopped herbs and 2 Tbsp. oil and blend everything together.', 'Bring a pot of water to a boil with a large pinch of salt, 2 bay leaves, and a pinch of chopped herbs. Cook the pasta in the fragrant water until al dente.', 'In the meantime, for the flavored oil: add the remaining chopped herbs and a squeeze of lemon juice to 1/2 cup oil.', 'Strain the pasta, reserving a bit of the pasta cooking water, and transfer back to the pot. Toss with the flavored oil, bread crumbs with herbs, Grana Padano cheese, and a bit of the cooking water. Cook for 30 seconds and serve.'
        ],
    },
  },
  {
    id: 9,
    title: 'sea bass tortelli in fish broth',
    type: 'italy',
    img_src: 'https://rms.condenast.it/rms/public/5df/0f6/eaf/thumb_5592_1200_670_0_0_auto.jpg',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 10,
    title: 'sorrento-style cannelloni',
    type: 'italy',
    img_src: 'https://rms.condenast.it/rms/public/5fa/2a8/0a0/thumb_6659_450_450_0_0_crop.jpg',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 11,
    title: 'pasticciotto tart with cream and black cherries',
    type: 'italy',
    img_src: 'https://rms.condenast.it/rms/public/602/aa3/987/thumb_6815_450_450_0_0_crop.jpg',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 12,
    title: 'bacon, cheddar, and onion quiche',
    type: 'france',
    img_src: 'https://www.foodandwine.com/thmb/YJ3gqRL4MP5grWcw7Q9NZb13Fgo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201112-xl-bacon-cheddar-and-onion-quiche-8a9c57a0654a49a49865e69cf3c7cf0b.jpg',
    recipe_info: {
      ingredients: ['Pastry', '2 cups all- purpose flour', '1/2 teaspoon salt', '1/4 teaspoon freshly ground black pepper', '1 1 / 2 sticks cold unsalted butter, cut into small pieces', '1/2 cup ice water'],
      instructions: ['In a medium bowl, whisk together the flour, salt and pepper. Using a pastry cutter or 2 knives, cut in the butter until it resembles small peas. Sprinkle the water on top and mix until the dough begins to come together. Turn the pastry out onto a work surface and gently knead 2 or 3 times, just until it comes together. Pat the pastry into a disk, wrap in plastic and refrigerate until thoroughly chilled, 1 hour.', 'On a lightly floured work surface, roll out the pastry to a 12-inch round, about 1/8 inch thick. Ease the pastry into an 11-inch fluted tart pan with a removable bottom. Trim the overhang so it is flush with the rim of the tart pan. Refrigerate the tart shell for 20 minutes.', 'Preheat the oven to 375°. Line the tart shell with aluminum foil and fill to the top with pie weights or dried beans. Bake for about 50 minutes, until the pastry is golden. Remove the foil and weights and bake the shell for about 25 minutes longer, until richly browned and crisp. Transfer to a rack to cool, for about 10 minutes. Turn the oven down to 325°.'],
    },
  },
  {
    id: 13,
    title: 'chicken basquaise',
    type: 'france',
    img_src: 'https://www.saveur.com/uploads/2019/02/08/E42B54E7FHVCG2H7X5QAHSXESA.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=720&dpr=1',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 14,
    title: 'barigoule of spring vegetables',
    type: 'france',
    img_src: 'https://www.saveur.com/uploads/2019/03/18/GJRZDINWLLLI5MSE6GOP4NGQPE.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=720&dpr=1',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 14,
    title: 'gateau basque',
    type: 'france',
    img_src: 'https://www.saveur.com/uploads/2019/02/08/URGVKJ7RNRC6ITIUZ7PNNNHN6Q.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=720&dpr=1',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 15,
    title: 'casa dragones guacamole',
    type: 'mexico',
    img_src: 'https://www.saveur.com/uploads/2019/03/18/DYJJ7E56WUXVLG32GM4YLAL4DM.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=720&dpr=1',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 16,
    title: 'tostadas de camaron seco',
    type: 'mexico',
    img_src: 'https://www.saveur.com/uploads/2019/03/18/IY6AWACD76PABJ7X7MULDAIHNI.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=720&dpr=1',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
]

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
    </div>
  );
}

export default App;
