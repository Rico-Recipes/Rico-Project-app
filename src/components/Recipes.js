import React from 'react';

import { useParams } from 'react-router-dom';

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

function Recipes() {
    return (
        <>
            {
                DUMMY_DATA.map(recipe => (
                    <section key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.type}</p>
                    </section>        
                ))
            }
        </>
    )
}

export default Recipes;
