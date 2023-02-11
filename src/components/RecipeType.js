import React from 'react';

import { Link, useParams } from 'react-router-dom';
import Recipe from './Recipe';

function RecipeType ({ data }) {

    const { recipeType } = useParams();

    return (
        <>
            <h1>This is the {recipeType} page</h1>
            {
                data.filter(recipe => recipe.type === recipeType).map(filteredRecipe => (
                    <section key={filteredRecipe.id}>
                        <Link to={`${filteredRecipe.title}`} relative='path' element={<Recipe />}>
                            <h3>{filteredRecipe.title}</h3>
                        </Link>
                        <p>{filteredRecipe.type}</p>
                        <img src={filteredRecipe.img_src} alt='' />
                    </section>
                ))
            }
        </>
    )
};

export default RecipeType;
