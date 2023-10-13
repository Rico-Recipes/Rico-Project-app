import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FavoritesContext } from '../FavoritesProvider';
// import { Recipes } from './Recipes';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Favorites() {
   const  {favorites }  = useContext(FavoritesContext);

    return (
        <Container width={40}>

            <Row>

                {
                    favorites?.length
                    ?   (favorites.map(recipe => (
                    
                        <Col sm={4}>
                            <Link
                                to={`/recipes/${recipe.type}/${recipe.title}`}
                            >
                                <Card key={recipe.id} style={{ padding: 6, width: 350, margin: 30 }} className='bg-dark text-white'>

                                    <Card.Img
                                        src={recipe.img_src}
                                        alt='recipesimg'
                                        width={40}
                                        height={400}
                                    />
                                    <Card.ImgOverlay>
                                        <Card.Title>{recipe.title}</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Link>
                        </Col>
                    )))
                    :   (
                            <div>Your favorites are empty.</div>
                        )
                }
            </Row>
            <Row>
            </Row>
            <Row>
                <Col sm={1}>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card>
                            Go Home
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Favorites;