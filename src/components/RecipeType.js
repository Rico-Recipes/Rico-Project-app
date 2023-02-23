import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Recipe from "./Recipe";

function RecipeType({ data }) {
  const { recipeType } = useParams();

  return (
    <Container>
      <Row>
        <Col>
          <h1>This is the {recipeType} page</h1>
        </Col>
      </Row>
      <Row>
        {data
          .filter((recipe) => recipe.type === recipeType)
          .map((filteredRecipe) => (
            <Col>
              <section key={filteredRecipe.id}>
                <Link
                  to={`${filteredRecipe.title}`}
                  relative="path"
                  element={<Recipe />}
                >
                  <h3>{filteredRecipe.title}</h3>
                </Link>
                <p>{filteredRecipe.type}</p>
                <img src={filteredRecipe.img_src} alt="" />
              </section>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default RecipeType;
