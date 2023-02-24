import React, { useState } from "react";
import { Home } from "./components/Home.js";
import HomepageNavbar from "./components/HomepageNavbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Recipes from "./components/Recipes";
import RecipeType from "./components/RecipeType.js";
import Recipe from "./components/Recipe";
import { WorldTour } from "./components/WorldTour.js";
import Footer from "./components/Footer.js";
import Favorites from "./components/Favorites.js";






const DUMMY_DATA = [
  {
    id: 1,
    title: "Chilaquiles",
    type: "breakfast",
    img_src:
      "https://thegourmetinsider.com/wp-content/uploads/2020/09/chilaquiles-rojos-1200x675_01.jpg",
    recipe_info: {
      ingredients: [
        "1/4 cup vegetable oil, for frying",
        "12 corn tortillas, cut into 8 wedges each",
        "Kosher salt",
        "4 Roma tomatoes or 2 large tomatoes (about 1 1/2 pounds), chopped",
        "1/2 large yellow onion, chopped",
        "1 medium jalapeño, sliced (remove the seeds for a less spicy dish)",
        "2 cloves garlic",
        "1 1/4 cups low-sodium chicken or vegetable broth, divided",
        "Avocado or guacamole",
        "Crema",
        "Queso fresco",
        "Fried eggs",
      ],
      instructions: [
        "Fry the tortillas. Heat 1/4 cup oil in a large skillet over medium-high heat until shimmering. Add about a quarter of the tortilla wedges and cook, flipping once, until lightly brown and crisp.",
        "Drain the tortilla chips. Drain the freshly fried tortilla chips on a paper towel-lined baking sheet. Sprinkle lightly with salt. Repeat this process until all tortillas are fried, adding more oil if needed.",
        "Make the salsa roja. Place the tomatoes, onion, jalapeño, and garlic in a blender or food processor fitted with the blade attachment. Pour in 1 cup of the broth. Blend until smooth.",
        "Cook the salsa. Heat 2 teaspoons oil in a large skillet over medium-high heat until shimmering. Add the salsa and cook, stirring occasionally, until slightly thickened, 5 to 10 minutes (the consistency of the salsa will vary depending on the size and juiciness of the tomatoes). Add additional broth to thin out the salsa, if needed. Taste and season with salt as needed.",
        "Coat the chips with the salsa. Add the tortilla chips and stir carefully to coat the chips. Cook until the tortillas are heated through, about 3 minutes. Taste and season with salt as needed.",
        "Serve warm. Serve warm garnished with avocado or guacamole, crema, queso fresco, and/or fried eggs, if desired.",
      ],
    },
    country: "Mexico",
  },
  {
    id: 2,
    title: "Overnight Oats",
    type: "breakfast",
    img_src:
      "https://flavorthemoments.com/wp-content/uploads/2022/02/blueberry-overnight-oats-2.jpg",
    recipe_info: {
      ingredients: ['2 cups old fashioned rolled oats', '2 tablespoons chia seeds', '2½ cups unsweetened almond milk', '3 tablespoons pure maple syrup', '1 cup fresh blueberries',],
      instructions: ['Place the oats, chia seeds, almond milk and maple syrup in a large bowl.', 'Stir together until combined.Cover with plastic wrap and store in the fridge overnight', 'In the morning, stir in blueberries, leaving some for garnish, if desired, and divide into jars or bowls.',
        'Top with nuts or coconut flakes, if desired, serve and enjoy!'],
    },
    country: "USA",
  },

  {
    id: 3,
    title: "Eggs Benedict",
    type: "breakfast",
    img_src:
      "https://www.carolinescooking.com/wp-content/uploads/2019/03/eggs-Benedict-photo.jpg",
    recipe_info: {
      ingredients: ['2 English muffins', '4 slices ham or Canadian bacon', '1 teaspoon white vinegar', '4 eggs', 'For the Hollandaise sauce', '2 egg yolks', '1 pinch cayenne pepper', '¼ teaspoon Dijon mustard', '1 tablespoon lemon juice', '4 tablespoon butter'],
      instructions: ['Set a pot of water to boil for the eggs.', 'Split the English muffins and toast them.Set aside, keeping warm if possible.', 'If using Canadian bacon, cook it in skillet or under broiler, or warm if using ham.', 'Make or warm your Hollandaise sauce.For easy blender sauce, put the yolks, cayenne, mustard and lemon juice in a blender container and blend until smooth. Melt the butter and pour into the yolk mixture with the blender running so that it combines smoothly.Set aside.', 'Lastly, poach the eggs. Add the vinegar to the boiling water, then carefully crack the eggs in to the simmering water. Cook for around 3 - 4 minutes until the whites are translucent but the yolks are still slightly soft.Remove with a slotted spoon.', 'Assemble the eggs Benedict - make stacks with half a muffin at the bottom, topped with bacon / ham, then a poached egg and topped with the Hollandaise sauce.'],
    },
    country: "USA",
  },
  {
    id: 4,
    title: "Boring Ham Sandwich",
    type: "lunch",
    img_src:
      "https://hips.hearstapps.com/hmg-prod/images/190322-ham-sandwich-horizontal-1553721016.png",
    recipe_info: {
      ingredients: ['FOR THE HERB MAYO', '1 c.mayonnaise', '2 tbsp.freshly chopped parsley', '2 tsp.freshly chopped thyme', '1 tbsp.extra - virgin olive oil', '2 cloves garlic, minced', 'FOR THE SANDWICH', '8 slices crusty bread, such as sourdough or ciabatta', '1 / 2 c.herb mayo', '1 / 4 c.Dijon mustard', '12 slices deli ham', '8 slices provolone', '1 arugula', '1 tomato, thinly sliced', '1 / 2 red onion, thinly sliced'],
      instructions: ['In a medium bowl whisk together mayonnaise, parsley, thyme, oil, and garlic.', 'Spread 2 tablespoons herb mayo on 4 slices of bread.', 'Spread 1 tablespoon mustard on the other 4 slices of bread.', 'Top each mayo slice of bread with 3 slices of ham, 2 slices of provolone, arugula, a couple slices of tomato, and red onion.', 'Top with remaining bread slices, mustard side down.'],
    },
    country: "USA",
  },
  {
    id: 5,
    title: "dry meat loaf",
    type: "dinner",
    img_src:
      "https://assets.epicurious.com/photos/57eab27ecf9338f824b78b4b/master/w_1000,h_667,c_limit/old-fashioned-meat-loaf.jpg",
    recipe_info: {
      ingredients: ['Meatloaf Ingredients:', '2 lbs ground beef, 85 % or 90 % lean', '1 med onion, finely chopped', '2 large eggs', '3 garlic cloves, minced', '3 Tbsp ketchup', '3 Tbsp fresh parsley, finely chopped', '3 / 4 cup Panko breadcrumbs', '1 / 3 cup milk', '1 ½ tsp salt, or to taste', '1 ½ tsp Italian seasoning', '¼ tsp ground black pepper', '½ tsp ground paprika', 'Meatloaf Sauce Ingredients:', '3 / 4 cup ketchup', '1 ½ tsp white vinegar', '2 ½ Tbsp brown sugar', '1 tsp garlic powder', '½ tsp onion powder', '¼ tsp ground black pepper', '¼ tsp salt'],
      instructions: ['US Customary - Metric', 'Line a 9”x5” loaf pan with parchment paper and preheat oven to 375°F.', 'In a large bowl, add all of the ingredients for the meatloaf.Mix well to combine.', 'Add meat to the loaf pan, gently press meat down and shape evenly and bake meatloaf at 375˚F for 40 minutes.', 'In a small bowl, mix all of the ingredients together for the sauce.Spread the sauce over meatloaf then return to oven and bake additional 15-20 minutes or until the internal temperature is 160˚F.Rest meatloaf 10 minutes before slicing.Drizzle with baking juices from the pan.'],
    },
    country: "USA",
  },
  {
    id: 6,
    title: "caesar salad",
    type: "lunch",
    img_src:
      "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
    recipe_info: {
      ingredients: ['For the Croutons:', '1 / 2 French Baguette, cut in half and thinly sliced(1 / 4" thick)', '3 Tbsp extra virgin olive oil', '1 tsp minced garlic, 2 small cloves', '2 Tbsp grated parmesan cheese', 'Caesar Salad dressing:', '2 small garlic cloves, minced(1 tsp)', '2 tsp dijon mustard', '1 tsp Worcestershire sauce', '2 tsp fresh lemon juice', '1 1 / 2 tsp red wine vinegar', '1 / 3 cup extra virgin olive oil', '1 / 2 tsp sea salt, or to taste', '1 / 8 tsp black pepper, plus more to serve', 'For the Caesar Salad:', '1 large romaine lettuce, (or 2 small heads romaine)', '1 / 3 cup parmesan cheese, shredded or shaved'],
      instructions: ['US Customary - Metric', 'How to Make Croutons:', 'Preheat oven to 350˚F.Cut the baguette in half lengthwise through the top of the baguette then slice diagonally into 1 / 4" thick pieces. Place the breads onto a baking sheet.', 'In a small bowl, combine 3 Tbsp extra virgin olive oil and 1 tsp of finely minced garlic.Drizzle the garlic oil over the croutons and sprinkle the top with 2 Tbsp grated parmesan cheese.', 'Toss until evenly coated.Spread in a single layer over the baking sheet and bake at 350˚F until light golden and crisp(10- 12 minutes), or to desired crispness.', 'How to Make Caesar Salad Dressing:', '1	In a small bowl, whisk together garlic, dijon, Worcestershire, lemon juice and red wine vinegar.', 'Slowly drizzle in extra virgin olive oil while whisking constantly.', 'Whisk in 1 / 2 tsp salt and 1 / 8 tsp black pepper, or season to taste.', 'How to Make Caesar Salad:', '1	Rinse, dry and chop or tear the romaine into bite - sized pieces.Place in a large serving bowl and sprinkle generously with shredded parmesan cheese and cooled croutons.Drizzle with caesar dressing and toss gently until lettuce is evenly coated.'],
    },
    country: "USA",
  },
  {
    id: 7,
    title: "steak and potatoes",
    type: "dinner",
    img_src:
      "https://www.lecremedelacrumb.com/wp-content/uploads/2019/03/feat-500x500.jpg",
    recipe_info: {
      ingredients: ['2 - 4 petite steaks - * see note', 'salt and pepper to taste', 'garlic powder to taste', '1 tablespoon olive oil', '2 - 4 pounds baby potatoes - diced', '2 - 6 tablespoons salted butter - soft enough to mash with a fork, one tablespoon per steak, plus two tablespoons for the potatoes', '2 teaspoons minced garlic', '1 teaspoon dried Italian herb blend', '1 teaspoon chopped fresh thyme', '1 teaspoon chopped fresh parsley'],
      instructions: ['Preheat oven to 400 degrees.In a small bowl combine butter, garlic, and dried herbs and set aside.Season steaks generously with salt, pepper, and garlic powder on both sides.', 'Place skillet over medium - high heat and drizzle with oil.Sear steaks for 2 - 3 minutes one each side until nice and browned.Transfer to a plate and set aside.', 'Add potatoes to the skillet, season generously with salt, pepper, and garlic powder and saute 3 - 5 minutes until browned.Push potatoes to one side of the pan and return steaks to the other side of the pan.', 'Transfer to oven and cook for 15 - 20 minutes until potatoes are fork - tender and steak is cooked to your preferred doneness.',
        'Immediately after removing from oven, place a dollop of the garlic butter on each steak and the rest on the potatoes and let it melt over the food before stirring the potatoes to coat in butter and then topping with chopped thyme and parsley before serving.'],
    },
    country: "USA",
  },
  // {
  //   id: 8,
  //   title: 'tamales',
  //   type: 'dinner',
  //   img_src: 'https://muybuenocookbook.com/wp-content/uploads/2021/12/tamales-steaming-1365x2048.jpg',
  //   recipe_info: {
  //     ingredients: ['7-8 pounds pork butt or pork shoulder', '2 1/2 cups water', '1 tablespoon sea salt', '6 1/2 cups Red Chile Sauce', '1 Batch Tamale Masa', 'Corn husks, hojas'],
  //     instructions: ['Place pork, water, and salt in a slow cooker and cook for 6 to 8 hours. After meat is cooked, remove from the slow cooker and let cool to room temperature. Shred pork and remove fat while shredding, reserving fat. (Usually, after pork is cooked and shredded, you will be left with about 3 pounds of meat.)', 'In a blender combine the cooled broth from the cooked pork and the leftover fat pieces. Blend and reserve for using when making tamale masa and filling. Broth can be kept, tightly covered, for 1 week in the refrigerator. The broth also freezes well and will keep for 4 to 6 months.', 'Heat the 6 tablespoons broth in a large skillet. Add flour and whisk for at least 4 to 5 minutes.', 'Add red chile sauce and salt, stir, and cook for 10 minutes. The chile sauce will be very thick at this time.', 'Add the 3 pounds shredded pork and stir so all the pork is well coated with the red chile sauce. Simmer for at least 10 minutes. Let mixture cool before filling tamales.', 'Soak corn husks in water for an hour before using, rinse well with running water to take off any dust or corn husk fibers. To keep corn husks pliable and easy to work with, keep in water while filling tamales. Place a handful of wet corn husks in a colander to drain before using.', 'Place the wide end of the husk on the palm of your hand, narrow end is at the top. Starting at the middle of the husk spread 2 tablespoons of the masa with the back of a spoon in a rectangle or oval shape, using a downward motion towards the wide-bottom edge. Do not spread the masa to the ends; leave about a 2-inch border on the left and right sides of the husk.', 'Spoon 1 1/2 tablespoons of your chosen filling down the center of the masa. Fold both sides to the center; finish off by bringing the pointed end of the husk toward the filled end. Make sure it’s a snug closure so the tamale will not open during steaming. Secure by tying a thin strip of corn husk around the tamal. This will keep the tamale from unwrapping during the steaming process, especially if the husk is too thick and will not stay folded.', 'Use a deep pot or tamale steamer to steam tamales. If using a tamale steamer fill with water up to the fill line. Set the tamale rack over the water. Place tamales upright, with fold against the sides of the other tamales to keep them from unfolding. Cover pot with a tightly fitting lid. Set heat on high and bring to a boil, about 15 minutes. Lower heat and simmer for 2 1/2 to 3 hours. Keep lid on tightly. To test if done, put one tamal on a plate and take off the corn husk. If it comes off without sticking to the tamal they are done.']
  //   },
  //   country: 'Mexico'
  // },
  {
    id: 9,
    title: "Enchiladas Rojas",
    type: "lunch",
    img_src:
      "https://www.mexicoinmykitchen.com/wp-content/uploads/2013/05/Redenchiladas28129.jpg",
    recipe_info: {
      ingredients: [
        "Guajillo peppers (seeds removed)",
        "Ancho peppers (seeds removed)",
        "Garlic cloves (chopped)",
        "Mexican oregano",
        "Salt and pepper to taste",
        "Corn tortillas",
        "Shredded beef pork or chicken (optional)",
        "Fresh cheese crumble",
        "White onion (finely chopped)",
        "Vegetable oil",
      ],
      instructions: [
        "Slightly roast the peppers in a hot griddle.",
        "Once the peppers are roasted, place them in a saucepan with water and turn the heat to medium.",
        "Remove the saucepan from the stove and let them cool down first. Then, drain the peppers and place them into the blender along with the garlic cloves.",
        "Add ½ cup of clean water and blend until you have a smooth sauce. Season with the oregano, salt, and pepper, and set aside.",
        "Preheat your oven to 350 degrees to keep the enchiladas warm while you finish assembling them.",
        "Add the 2 tablespoons of vegetable oil in a large skillet over medium heat.",
        "Dip the tortilla into the enchilada sauce and place it in the frying comal-pan or skillet.",
        "Briefly fry them for a few seconds on both sides and place the fried tortillas in a dish.",
        "To assemble the red enchiladas, place the meat filling in the center of the tortilla, and fold it just like in the pictures above.",
        "Repeat this step until you have run out of meat filling and corn tortillas.",
        "Sprinkle the enchiladas with the cheese crumbled and chopped onions.",
        "Add the garnish of your choice and enjoy!",
      ],
    },
    country: "Mexico",
  },
  {
    id: 10,
    title: "butter chicken",
    type: "dinner",
    img_src:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/butter-chicken-recipe.jpg",
    recipe_info: {
      ingredients: [
        "28 oz (800g) boneless and skinless chicken thighs or breasts cut into bite-sized pieces",
        "1/2 cup plain yogurt",
        "1 1/2 tablespoons minced garlic",
        "1 tablespoon minced ginger (or finely grated)",
        "2 teaspoons garam masala",
        "1 teaspoon turmeric",
        "1 teaspoon ground cumin",
        "1 teaspoon red chili powder",
        "1 teaspoon of salt",
        "2 tablespoons olive oil",
        "2 tablespoons ghee (or 1 tbs butter + 1 tbs oil)",
        "1 large onion, sliced or chopped",
        "1 1/2 tablespoons garlic, minced",
        "1 tablespoon ginger, minced or finely grated",
        "1 1/2 teaspoons ground cumin",
        "1 1/2 teaspoons garam masala",
        "1 teaspoon ground coriander",
        "14 oz (400 g) crushed tomatoes",
        "1 teaspoon red chili powder (adjust to your taste preference)",
        "1 1/4 teaspoons salt (or to taste)",
        "1 cup of heavy or thickened cream (or evaporated milk to save calories)",
        "1 tablespoon sugar",
        "1/2 teaspoon kasoori methi (or dried fenugreek leaves)",
      ],
      instructions: [
        "In a bowl, combine chicken with all of the ingredients for the chicken marinade; let marinate for 30 minutes to an hour (or overnight if time allows).",
        "Heat oil in a large skillet or pot over medium-high heat. When sizzling, add chicken pieces in batches of two or three, making sure not to crowd the pan. Fry until browned for only 3 minutes on each side. Set aside and keep warm. (You will finish cooking the chicken in the sauce.)",
        "Heat butter or ghee in the same pan. Fry the onions until they start to sweat (about 6 minutes) while scraping up any browned bits stuck on the bottom of the pan.",
        "Add garlic and ginger and sauté for 1 minute until fragrant, then add ground coriander, cumin and garam masala. Let cook for about 20 seconds until fragrant, while stirring occasionally.",
        "Add crushed tomatoes, chili powder and salt. Let simmer for about 10-15 minutes, stirring occasionally until sauce thickens and becomes a deep brown red colour.",
        "Remove from heat, scoop mixture into a blender and blend until smooth. You may need to add a couple tablespoons of water to help it blend (up to 1/4 cup). Work in batches depending on the size of your blender.",
        "Pour the puréed sauce back into the pan. Stir the cream, sugar and crushed kasoori methi (or fenugreek leaves) through the sauce. Add the chicken with juices back into the pan and cook for an additional 8-10 minutes until chicken is cooked through and the sauce is thick and bubbling.",
        "Garnish with chopped cilantro and serve with fresh, hot garlic butter rice and fresh homemade Naan bread!",
      ],
    },
    country: "India",
  },
  {
    id: 11,
    title: "Coq Au Vin",
    type: "dinner",
    img_src:
      "https://leitesculinaria.com/wp-content/uploads/2022/09/julia-child-coq-au-vin.jpg",
    recipe_info: {
      ingredients: [
        "1/2 cup lardons (or very thickly sliced bacon) cut into 1/4- by 1 1/2-inch (6- by 36-mm) strips (optional)",
        "▢2 or more tablespoons olive oil",
        "3 1/2 to 4 1/2 pounds chicken cut into parts (or all one kind of part), thoroughly dried",
        "1/4 cup Cognac or Armagnac",
        "Salt and freshly ground black pepper",
        "1 bay leaf",
        "1/4 teaspoon dried thyme",
        "20 pearl onions peeled",
        "3 tablespoons all-purpose flour",
        "2 cups red wine preferably Burgundy, Côtes du Rhône, or pinot noir",
        "About 2 cups homemade chicken stock, or beef stock preferably brown chicken stock",
        "▢1 or 2 garlic cloves mashed or minced",
        "About 1 tablespoon store-bought or homemade tomato paste",
        "3/4 pound fresh mushrooms trimmed, rinsed, and quartered",
        "Fresh thyme sprigs for garnish (optional)",
      ],
      instructions: [
        "Pour enough oil in a large pot to reach a depth of 1/8 inch if you're not using lardons or bacon. If you are using lardons or bacon, toss them in a heavy-bottomed casserole or pot along with 2 tablespoons oil over medium or medium-high until lightly browned, about 2 minutes. Transfer the lardons or bacon to a plate, leaving the drippings in the pot.",
        "Heat the drippings or oil remaining in the pot over medium-high heat. Add the chicken, being careful not to crowd the pieces. (You may need to work in batches). Cook the chicken, turning frequently, until nicely browned on all sides. (If working in batches, return all the chicken to the pot.)",
        "Carefully pour the Cognac or Armagnac into the pot and wait until it becomes bubbling hot. If desired—and if you're brave—ignite the sauce with a match. Let it flame for a minute, gently tilting the pot by its handle and swirling the sauce to burn off the alcohol. To extinguish the flames, simply cover the pan with its lid.",
        "Season the chicken with salt and pepper. Add the bay leaf and thyme to the pan and then nestle the onions around the chicken. Cover the pot and let the chicken simmer gently, turning the pieces once, for about 10 minutes.",
        "Uncover the pot, sprinkle the flour over everything, and turn the chicken and onions so the flour is absorbed by the sauce. Cover and cook, turning once or twice, for 3 to 4 minutes more.",
        "If the onions are not quite tender, continue cooking them in the sauce, then return the chicken to the pot, add the mushrooms, and simmer 4 to 5 minutes.",
        "The sauce should be just thick enough to lightly coat the chicken and vegetables. (If the sauce seems too thin, bring it to a boil and cook until the sauce is reduced to the desired consistency. If the sauce is too thick, thin it with spoonfuls of stock.) Taste the sauce and correct the seasoning accordingly.",
        "Serve immediately, garnished with thyme sprigs, if desired, or let it cool, cover, and refrigerate overnight. To reheat, skim any fat that has congealed on the surface of the stew and place the pot of coq au vin over medium-low heat. Garnish with thyme sprigs before serving, if desired.",
      ],
    },
    country: "France",
  },
  {
    id: 12,
    title: "Oxtail",
    type: "dinner",
    img_src:
      "https://www.butterbeready.com/wp-content/uploads/2022/09/DK6A6227.jpg",
    recipe_info: {
      ingredients: [
        "4 lbs (meaty!) fresh beef oxtail, already cut into pieces",
        "1 tablespoon browning sauce",
        "2 tablespoons worcestershire",
        "1 tablespoon packed brown sugar",
        "1 teaspoon Jamaican curry powder",
        "1 teaspoon Jamaican ground allspice",
        "1/2 teaspoon smoked paprika",
        "kosher salt & freshly ground black pepper, to taste",
        "1 medium white onion, chopped",
        "6 cloves of garlic, minced, or 1 tablespoon garlic paste",
        "2 teaspoons freshly grated ginger or ginger paste",
        "4 scallions, chopped",
        "2 tablespoons vegetable oil, plus more as needed",
        "2 tablespoons tomato paste",
        "3 medium carrots, chopped",
        "1 (8-ounce) can tomato sauce",
        "1 bay leaf",
        "1 scotch bonnet pepper, left whole- do not cut!",
        "6 sprigs fresh thyme",
        "4 cups beef broth",
        "1 (14-ounce) can butter beans, liquid drained"
      ],
      instructions: [
        "Add the oxtail pieces into a large bowl or gallon-sized ziplock bag. Then add in the browning sauce, worcestershire, brown sugar, curry powder, allspice, paprika, salt/pepper- to taste, onion, garlic, ginger, and scallions. Use your hands to massage all the aromatics and spices into the oxtail pieces, massaging very well to ensure the oxtail pieces are thoroughly coated.",
        "Cover the bowl with a lid/plastic wrap or seal ziplock bag and transfer to refrigerator to allow flavors to marinate for at least 2 hours or- more preferably, overnight (for the best results!). If marinating overnight, just be sure to go back and stir/massage the oxtail pieces at least once. This will ensure even flavor marination throughout.",
        "Remove the oxtail pieces from the marinade mixture, shaking off excess onion/scallion bits- but do not discard the marinade, set aside. Set the oxtail aside on a large plate/platter.",
        "In a large heavy-bottomed pot or dutch oven; heat the oil over medium-high heat. Once the oil is shimmering, gently swirl the pot around to evenly coat the bottom. Add a few oxtail pieces into the pot, working in batches, careful not to overcrowd. Sear the oxtail on all sides until a deep brown crust appears, about 2-3 minutes on each side. Transfer the browned oxtail onto a clean, large plate/platter and repeat the process until all the oxtail pieces are browned- adding a slick more of oil in between batches, only as needed. Then set the browned oxtail aside and reduce the heat to medium.",
        "Add all the reserved marinade mixture into the same pot along with the tomato paste. Use a wooden utensil to sauté until lightly tender, scraping up any caramelized bits on the bottom of the pot and stirring the paste to coat the marinade, about 4-5 minutes. Then add all browned oxtail pieces back into pot, nestling them right on top of the marinade mixture, along with any residual juices that have collected. Add the carrots, tomato sauce, bay leaves, scotch bonnet pepper, fresh thyme, and beef broth- the oxtail pieces should be almost completely submerged under the liquid. Gently stir everything together until well combined.",
        "Reduce the heat to medium-low and cover the pot with a lid. Allow the oxtail to stew for 2 – 2 1/2 hours, covered- until oxtail pieces are meltingly tender and falling apart.",
        "Empty the drained can of butter beans into the pot, gently stirring to combine. Let the butter beans cook in the oxtail stew for another 30 minutes until tender.",
        "Discard the herb stems, bay leaves, and scotch bonnet pepper from the pot. Skim any fat off the top of the liquid, as needed. If you’d like to thicken the stew gravy in the pot (see notes directly below for cornstarch slurry option), place over medium-high heat. Cook, gently stirring, for a bit until the liquid reaches your desired consistency. Afterwards, taste and adjust with more salt/pepper, as desired.",
        "Serve this Jamaican oxtail stew immediately. I love serving this oxtail stew in shallow bowls with a helping of extra stew gravy and alongside side items like rice and peas and plantains, too. Enjoy!"
      ],
    },
    country: "Jamaica",
  },
  {
    id: 13,
    title: "Rice & Peass",
    type: "dinner",
    img_src:
      "https://www.butterbeready.com/wp-content/uploads/2022/09/DK6A5627.jpg",
    recipe_info: {
      ingredients: [
        "1 cup dried red kidney beans, soaked overnight & then drained",
        "1/2 teaspoon Jamaican ground allspice",
        "kosher salt & freshly ground black pepper, to taste",
        "1 small yellow onion, chopped",
        "3 cloves of garlic, minced",
        "4 scallions, chopped",
        "2 tablespoons unsalted butter",
        "1 (13.5- ounce) can full-fat coconut milk",
        "2 bay leaves",
        "1 scotch bonnet pepper, left whole- do not cut!",
        "4-6 sprigs fresh thyme",
        "3 cups chicken stock or broth, plus more as needed",
        "2 cups uncooked long grain rice, rinsed until the water runs clear"
      ],
      instructions: [
        "In a large stock pot or dutch oven over medium heat; add in the drained beans, onion, scallions, garlic, scotch bonnet pepper, thyme, bay leaves, allspice, salt/pepper-to taste, stock/broth, and coconut milk. Stir all the ingredients together and cover the pot with a lid. Allow the beans to cook until mostly tender, about 1 hour.",
        "Meanwhile, add the rice grains into a large bowl and cover completely with cool water. Use your hands to gently swish the rice around and then drain. Repeat this process at least 6 times until the water runs clear, removing surface starch from the rice. Then carefully drain the rice and set aside until called for in the recipe.",
        "Back to the peas, check peas for tenderness by (carefully) testing: use a spoon to gather a bean and softly pinch, looking for a firm but semi-tender feel. At this point, the peas may not be completely soft but will also not be rock-hard either (they’ll continue cooking later).",
        "Once peas have achieved this state, add in the rinsed rice and butter, and stir to fully combine. Immediately reduce the heat to the lowest setting and cover the pot with a lid.",
        "Let the rice cook for 25-30 minutes. Keep an eye on the rice as it may cook faster or take a bit longer. If you see that some of the liquid has evaporated too quickly before the rice has cooked through, add about 1/4 cup more stock/broth to replenish, as needed. Then remove the pot from heat and let rice sit, covered/undisturbed, for at least 10-15 minutes to continue cooking, steaming through.",
        "Then take a fork and fluff rice, discarding the scotch bonnet pepper, thyme sprigs, and bay leaves. Taste the rice and adjust seasoning with more salt/pepper, if desired. Serve these rice and peas immediately alongside your favorite main entrees or as-is. Enjoy!"
      ],
    },
    country: "Jamaica",
  },
  {
    id: 14,
    title: "Congee",
    type: "breakfast",
    img_src:
      "https://omnivorescookbook.com/wp-content/uploads/2021/11/211109_Instant-Pot-Breakfast-Congee_5.jpg",
    recipe_info: {
      ingredients: [
        "1 cup (240 ml) short grain rice (or medium grain rice)",
        "8 cups low sodium chicken broth",
        "4 slices ginger",
        "4 green onions , sliced (and extra for garnish)",
        "Pinch salt (or to taste)",
        "8 pieces bacon",
        "2 teaspoons olive oil (or vegetable oil)",
        "4 large eggs",
        "4 teaspoons soy sauce (or to taste)",
        "4 teaspoons homemade chili oil , to taste (or toasted sesame oil for non-spicy congee)"
      ],
      instructions: [
        "Add the rice, chicken broth, ginger, green onion and salt into your Instant Pot. Cover and seal the lid. Select high pressure, and set the timer to 25 minutes. If you’re using a pressure cooker, seal the lid and cook over medium heat until pressure is reached. Then reduce to low heat and cook for 25 minutes. Once done, let the pressure release naturally.",
        "Once the pressure has fully released, open the lid and stir the congee with a ladle. It might look thin once it’s done cooking, but it will thicken up a bit once you stir it well and let it sit for a few minutes. If you want to change the texture of the congee, turn on the “Saute” function and let it boil down for a few minutes and stir constantly, until it turns thicker. Or you can pour in a bit of hot water and stir it if you want to thin it out.",
        "Make the toppings while the congee is cooking. Add the bacon to a nonstick skillet and cook over medium heat. Cook, flipping occasionally, until the bacon has turned golden brown and crispy. If it starts to smoke too much, turn to medium-low heat. Once done, set aside to let cool slightly. Then cut or crumble the bacon into small pieces.",
        "You can use the bacon fat to cook the eggs if you prefer. If not, wipe the pan clean with a paper towel and add the oil. Heat over medium heat until oil is hot. Add the eggs. Let cook, using your spatula to arrange the egg whites so they form rounded shapes. Cook the eggs until the whites are set and the yolks are still runny. Or you can also cook the eggs until your desired doneness.",
        "Spoon the congee into individual serving bowls. For each bowl, top with the egg, drizzle with 1 teaspoon soy sauce, sprinkle with bacon crumbles and green onions (if desired), and finish up with homemade chili oil. Enjoy it while it’s hot!"
      ],
    },
    country: "China",
  },
  {
    id: 15,
    title: "Pizza",
    type: "lunch",
    img_src:
      "https://www.nonnabox.com/wp-content/uploads/2018/01/pizza_napolitana.webp",
    recipe_info: {
      ingredients: [
        "4 cups all-purpose four",
        "2 1/2 cups water",
        "3 grams dried yeast",
        "15 grams salt",
        "2.6 lbs red tomatoes",
        "3 tbsp. extra virgin oil",
        "8 basil leaves",
        "fresh mozzarella",
        "4 teaspoons soy sauce (or to taste)",
        "4 teaspoons homemade chili oil , to taste (or toasted sesame oil for non-spicy congee)"
      ],
      instructions: [
        "To prepare the dough for the pizza, start pouring the flour in a large mixer bowl.",
        "In a small bowl add luke-warm water and then add the yeast, mixing gently until the yeast is dissolved.",
        "Turn the mixer on with the hook mounted on medium-to-low speed and start pouring the water little by little, making sure you wait for the previous dose to be absorbed by the flour.",
        "Keep kneading until the dough gets smooth and homogeneous. When it gets to that point, keep kneading for about 15-20 minutes.",
        "Add the salt and keep the mixer running until the salt is fully combined with the dough. When the salt is fully absorbed, remove the dough from the mixer and knead with your hands until you get a large ball.",
        "Place it in a large bowl, cover with foil or a clean humid cloth, then let it rise in the oven with the light on.",
        "Wait until the mixture has at least doubled in volume (after 1.5 h). Ideally, you should let it triple in size (at least 3 hours). Once the dough has risen, transfer it on a work surface.",
        "Divide it into 4 equal parts and shape them as balls using your hands. Once done, cover them with a clean cloth and let them stand for 30 minutes at room temperature, before using them to make your pizzas.",
        "Rip the pedicels off, washing the tomatoes very well and leaving them to dry.",
        "Cut each tomato into two halves and remove the green part, also known as the pith. Squeeze the two halves of the tomato in a bowl or in a sink, to get rid of all the seeds.",
        "Once you’ve repeated this process with all the tomato halves, put them in a steel pot, and cook the tomatoes on a stove’s hotplate, on low heat, turning them occasionally with a spoon, until dry and disintegrated.",
        "Now pass the tomatoes through a food mill. Once all tomatoes have been passed, transfer the resulting sauce in a smaller steel pot while you will again put on the hotplate.",
        "Add salt and oil to the sauce, and let it simmer over high heat, until you get the desired thickness.",
        "Then turn off the heat and add the whole basil leaves to the sauce or coarsely chopped by hand.",
        "Flatten out each dough ball. Assemble pizza with sauce and cheese.",
        "Bake until cheese is melted and dough is golden. Enjoy!"
      ],
    },
    country: "Italy",
  },
];

function App() {
  const [filteredRecipesList, setFilteredRecipesList] = useState([
    ...DUMMY_DATA,
  ]);
  const [search, setSearch] = useState("");

  const handleRecipeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (search.length) {
      const regex = new RegExp(search, "gi");
      const filtered = DUMMY_DATA.filter((recipe) => {
        return (
          recipe.title.match(regex) ||
          recipe.title.toLowerCase().includes(search.toLowerCase())
        );
      });

      setFilteredRecipesList(filtered);
    } else {
      setFilteredRecipesList([...DUMMY_DATA]);
    }
  };



  return (
    <div className="App">
      <header className="App-header"></header>

      <HomepageNavbar
        handleRecipeSearch={handleRecipeSearch}
        handleSubmit={handleSubmit}
      />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="favorites" element={ <Favorites/>} />

        <Route
          path="recipes"
          element={<Outlet />}
        >
          <Route
            path=""
            element={<Recipes data={filteredRecipesList} />}
          />
          <Route
            path=":recipeType"
            element={<Outlet />}
          >
            <Route
              path=""
              element={<RecipeType data={filteredRecipesList} />}
            />
            <Route
              path=":recipe"
              element={<Outlet />}
            >
              <Route
                path=""
                element={<Recipe recipeData={filteredRecipesList} />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="worldtour" element={<WorldTour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
