import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Recipe from './Recipe';

function Recipes({ data }) {

    return (

        <Container>

            <Row>

                {
                    data.map(recipe => (

                        <Col sm={6}>
                            <Link
                                to={`${recipe.type}/${recipe.title}`}
                            >
                                <Card key={recipe.id} className='bg-dark text-white'>

                                    <Card.Img
                                        src={recipe.img_src}
                                        alt=''
                                    />
                                    <Card.ImgOverlay>
                                        <Card.Title>{recipe.title}</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
            <Row>
                <Col sm={12}>
                    <Link to='/'>
                        <Card>
                            Go Home
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>


    )
}

export default Recipes;
