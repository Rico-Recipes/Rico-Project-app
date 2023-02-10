import React from 'react';

function Recipes({ data }) {

    return (

        <div>

            {
                data.map(recipe => (
                    <section key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.type}</p>
                        <img src={recipe.img_src} alt='' />
                    </section>
                ))
            }
        </div>

    )
}

export default Recipes;
