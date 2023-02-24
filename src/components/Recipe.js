import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import RecipeCard from "./RecipeCard";

function Recipe({ recipeData }) {
  const { recipe } = useParams();
  return (
    <>
      <h2 style={{ margin: "35px auto", textAlign: "center" }}>
        {recipeData.title}
      </h2>
      <Card style={{ width: "50%", margin: "auto" }} bg="black" text="white">
        <Card.Img src={recipeData.img_src} alt="" />
        <Card.Body>
          <h4>Ingredients</h4>
          <ul>
            {recipeData.recipe_info.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <ol>
            {recipeData.recipe_info.instructions.map((step) => (
              <li>{step}</li>
            ))}
          </ol>
        </Card.Body>
      </Card>
    </>
  );
}

export default Recipe;
