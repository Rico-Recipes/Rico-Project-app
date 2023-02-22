import React, { useState } from 'react';
import { Home } from './components/Home.js'
import HomepageNavbar from './components/HomepageNavbar'
import { Routes, Route } from 'react-router-dom'

import Recipes from './components/Recipes'
import RecipeType from './components/RecipeType.js';
import Recipe from './components/Recipe';
import { WorldTour } from './components/WorldTour.js';
import Footer from './components/Footer.js';

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
    id: 15,
    title: 'gateau basque',
    type: 'france',
    img_src: 'https://www.saveur.com/uploads/2019/02/08/URGVKJ7RNRC6ITIUZ7PNNNHN6Q.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=720&dpr=1',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 16,
    title: 'casa dragones guacamole',
    type: 'mexico',
    img_src: 'https://www.saveur.com/uploads/2019/03/18/DYJJ7E56WUXVLG32GM4YLAL4DM.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=720&dpr=1',
    recipe_info: {
      ingredients: [],
      instructions: [],
    },
  },
  {
    id: 17,
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
    country: 'Mexico'
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
    country: 'USA'
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
    country: 'USA'
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
    country: 'USA'
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
    country: 'USA'
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
    country: 'USA'
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
    country: 'USA'
  },
  // {
  //   id: 8,
  //   title: 'tamales',
  //   type: 'dinner',
  //   img_src: 'https://muybuenocookbook.com/wp-content/uploads/2021/12/tamales-steaming-1365x2048.jpg',
  //   recipe_info: {
  //     ingredients: ['7-8 pounds pork butt or pork shoulder', '2 1/2 cups water', '1 tablespoon sea salt', '6 1/2 cups Red Chile Sauce', '1 Batch Tamale Masa', 'Corn husks, hojas'],
  //     instructions: ['Place pork, water, and salt in a slow cooker and cook for 6 to 8 hours. After meat is cooked, remove from the slow cooker and let cool to room temperature. Shred pork and remove fat while shredding, reserving fat. (Usually, after pork is cooked and shredded, you will be left with about 3 pounds of meat.)', 'In a blender combine the cooled broth from the cooked pork and the leftover fat pieces. Blend and reserve for using when making tamale masa and filling. Broth can be kept, tightly covered, for 1 week in the refrigerator. The broth also freezes well and will keep for 4 to 6 months.', 'Heat the 6 tablespoons broth in a large skillet. Add flour and whisk for at least 4 to 5 minutes.', 'Add red chile sauce and salt, stir, and cook for 10 minutes. The chile sauce will be very thick at this time.', 'Add the 3 pounds shredded pork and stir so all the pork is well coated with the red chile sauce. Simmer for at least 10 minutes. Let mixture cool before filling tamales.', 'Soak corn husks in water for an hour before using, rinse well with running water to take off any dust or corn husk fibers. To keep corn husks pliable and easy to work with, keep in water while filling tamales. Place a handful of wet corn husks in a colander to drain before using.', 'Place the wide end of the husk on the palm of your hand, narrow end is at the top. Starting at the middle of the husk spread 2 tablespoons of the masa with the back of a spoon in a rectangle or oval shape, using a downward motion towards the wide-bottom edge. Do not spread the masa to the ends; leave about a 2-inch border on the left and right sides of the husk.', 'Spoon 1 1/2 tablespoons of your chosen filling down the center of the masa. Fold both sides to the center; finish off by bringing the pointed end of the husk toward the filled end. Make sure it’s a snug closure so the tamale will not open during steaming. Secure by tying a thin strip of corn husk around the tamal. This will keep the tamal from unwrapping during the steaming process, especially if the husk is too thick and will not stay folded.', 'Use a deep pot or tamale steamer to steam tamales. If using a tamale steamer fill with water up to the fill line. Set the tamale rack over the water. Place tamales upright, with fold against the sides of the other tamales to keep them from unfolding. Cover pot with a tightly fitting lid. Set heat on high and bring to a boil, about 15 minutes. Lower heat and simmer for 2 1/2 to 3 hours. Keep lid on tightly. To test if done, put one tamal on a plate and take off the corn husk. If it comes off without sticking to the tamal they are done.'] 
  //   },
  //   country: 'USA'
  // },
  {
    id: 9,
    title: 'Enchiladas Rojas',
    type: 'lunch',
    img_src: 'https://www.mexicoinmykitchen.com/wp-content/uploads/2013/05/Redenchiladas28129.jpg',
    recipe_info: {
      ingredients: ['Guajillo peppers (seeds removed)', 'Ancho peppers (seeds removed)', 'Garlic cloves (chopped)', 'Mexican oregano', 'Salt and pepper to taste', 'Corn tortillas', 'Shredded beef pork or chicken (optional)', 'Fresh cheese crumble', 'White onion (finely chopped)', 'Vegetable oil'],
      instructions: ['Slightly roast the peppers in a hot griddle.', 'Once the peppers are roasted, place them in a saucepan with water and turn the heat to medium.', 'Remove the saucepan from the stove and let them cool down first. Then, drain the peppers and place them into the blender along with the garlic cloves.', 'Add ½ cup of clean water and blend until you have a smooth sauce. Season with the oregano, salt, and pepper, and set aside.', 'Preheat your oven to 350 degrees to keep the enchiladas warm while you finish assembling them.', 'Add the 2 tablespoons of vegetable oil in a large skillet over medium heat.', 'Dip the tortilla into the enchilada sauce and place it in the frying comal-pan or skillet.', 'Briefly fry them for a few seconds on both sides and place the fried tortillas in a dish.', 'To assemble the red enchiladas, place the meat filling in the center of the tortilla, and fold it just like in the pictures above.', 'Repeat this step until you have run out of meat filling and corn tortillas.', 'Sprinkle the enchiladas with the cheese crumbled and chopped onions.', 'Add the garnish of your choice and enjoy!'],
    },
    country: 'Mexico'
  },
  {
    id: 10,
    title: 'butter chicken',
    type: 'dinner',
    img_src: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/butter-chicken-recipe.jpg',
    recipe_info: {
      ingredients: ['28 oz (800g) boneless and skinless chicken thighs or breasts cut into bite-sized pieces', '1/2 cup plain yogurt', '1 1/2 tablespoons minced garlic', '1 tablespoon minced ginger (or finely grated)', '2 teaspoons garam masala', '1 teaspoon turmeric', '1 teaspoon ground cumin', '1 teaspoon red chili powder', '1 teaspoon of salt', '2 tablespoons olive oil', '2 tablespoons ghee (or 1 tbs butter + 1 tbs oil)', '1 large onion, sliced or chopped', '1 1/2 tablespoons garlic, minced', '1 tablespoon ginger, minced or finely grated', '1 1/2 teaspoons ground cumin', '1 1/2 teaspoons garam masala', '1 teaspoon ground coriander', '14 oz (400 g) crushed tomatoes', '1 teaspoon red chili powder (adjust to your taste preference)', '1 1/4 teaspoons salt (or to taste)', '1 cup of heavy or thickened cream (or evaporated milk to save calories)', '1 tablespoon sugar', '1/2 teaspoon kasoori methi (or dried fenugreek leaves)'],
      instructions: ['In a bowl, combine chicken with all of the ingredients for the chicken marinade; let marinate for 30 minutes to an hour (or overnight if time allows).', 'Heat oil in a large skillet or pot over medium-high heat. When sizzling, add chicken pieces in batches of two or three, making sure not to crowd the pan. Fry until browned for only 3 minutes on each side. Set aside and keep warm. (You will finish cooking the chicken in the sauce.)', 'Heat butter or ghee in the same pan. Fry the onions until they start to sweat (about 6 minutes) while scraping up any browned bits stuck on the bottom of the pan.', 'Add garlic and ginger and sauté for 1 minute until fragrant, then add ground coriander, cumin and garam masala. Let cook for about 20 seconds until fragrant, while stirring occasionally.', 'Add crushed tomatoes, chili powder and salt. Let simmer for about 10-15 minutes, stirring occasionally until sauce thickens and becomes a deep brown red colour.', 'Remove from heat, scoop mixture into a blender and blend until smooth. You may need to add a couple tablespoons of water to help it blend (up to 1/4 cup). Work in batches depending on the size of your blender.', 'Pour the puréed sauce back into the pan. Stir the cream, sugar and crushed kasoori methi (or fenugreek leaves) through the sauce. Add the chicken with juices back into the pan and cook for an additional 8-10 minutes until chicken is cooked through and the sauce is thick and bubbling.', 'Garnish with chopped cilantro and serve with fresh, hot garlic butter rice and fresh homemade Naan bread!'],
    },
    country: 'India'
  },
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
        <Route
          path='worldtour'
          element={
            <WorldTour />
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
