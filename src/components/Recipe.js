import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import RecipeCard from "./RecipeCard";

function Recipe({ recipeData }) {

  const { recipe } = useParams();
  return (
    <>
      {
        recipeData.filter(item => item.title === recipe).map(filteredItem => (
          <React.Fragment>
            <h2 style={{ margin: "35px auto", textAlign: "center" }}>
              {filteredItem.title}
            </h2>
            <Card style={{ width: "50%", margin: "auto" }} bg="black" text="white">
              <Card.Img src={filteredItem.img_src} alt="" />
          <Card.Body>
                <h4>Ingredients</h4>
                <ul>
                  {filteredItem.recipe_info.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
                <h4>Instructions</h4>
                <ol>
                  {filteredItem.recipe_info.instructions.map((step) => (
                    <li>{step}</li>
                  ))}
                </ol>
              </Card.Body>
            </Card>

          </React.Fragment>
        ))
      }
    </>
  );
}

export default Recipe;