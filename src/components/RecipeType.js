import React from 'react';

import { useParams } from 'react-router-dom';

function RecipeType ({ data }) {

    const { recipeType } = useParams();

    return (
        <>
            <h1>This is the {recipeType} page</h1>
            {
                data.filter(recipe => recipe.type === recipeType).map(filteredRecipe => (
                    <section key={filteredRecipe.id}>
                        <h3>{filteredRecipe.title}</h3>
                        <p>{filteredRecipe.type}</p>
                        <img src={filteredRecipe.img_src} alt='' />
                    </section>
                ))
            }
        </>
    )
};

export default RecipeType;
