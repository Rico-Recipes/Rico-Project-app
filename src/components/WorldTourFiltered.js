import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
// import Recipe from "./Recipe";
// import { WorldTour } from "./WorldTour";

function WorldTourFiltered({ data }) {
  const { country } = useParams();
  console.log(country);
  console.log(data);
  return (
    <Container>
      <Row
        style={{
          display: "inline-flex",
          width: "100%",
          margin: "auto",
          padding: 10,
        }}
      >
        {data
          .filter((recipe) => recipe.country === country)
          .map((filteredRecipe) => (
            <Col sm={4}>
              <h2>{filteredRecipe.title}</h2>
              <Link
                to={`/recipes/${filteredRecipe.type}/${filteredRecipe.title}`}
              >
                <Card
                  style={{ padding: 6, width: 350 }}
                  key={filteredRecipe.id}
                  className="bg-dark text-white"
                >
                  <Card.Img
                    src={filteredRecipe.img_src}
                    alt="recipetype"
                    width={40}
                    height={400}
                    object-fit="cover"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>{filteredRecipe.country}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export { WorldTourFiltered };
