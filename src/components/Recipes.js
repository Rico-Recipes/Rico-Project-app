import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Recipe from "./Recipe";
import { FavoritesContext } from "../FavoritesProvider";

function Recipes({ data }) {

    const { addFavorite } = useContext(FavoritesContext);
  return (
    <Container width={40}>
      <Row>
        {data.map((recipe) => (
          <Col sm={4}>
            <Link to={`${recipe.type}/${recipe.title}`}>
              <Card
                key={recipe.id}
                style={{ padding: 6, width: 350, margin: 30 }}
                className="bg-dark text-white"
              >
                <Card.Img
                  src={recipe.img_src}
                  alt="recipesimg"
                  width={40}
                  height={400}
                />
                <Card.ImgOverlay>
                  <Card.Title>{recipe.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Link>
                            <Button
                                onClick={()=>addFavorite(recipe)}
                            >
                                Add to Favorites
                            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        <Col sm={1}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Card>Go Home</Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Recipes;
