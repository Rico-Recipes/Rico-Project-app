import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Recipe from './Recipe';

function RecipeType({ data }) {

    const { recipeType } = useParams();

    return (
        <Container>
          
            <Row style={{display:'inline-flex', width:'100%',margin:'auto', padding:10}}>
                {
                    data.filter(recipe => recipe.type === recipeType).map(filteredRecipe => (
                        <Col sm={4}>
                                <Link style={{textDecoration:"none",color:'black'}} to={`${filteredRecipe.title}/${filteredRecipe.type}`} relative='path'  element={<Recipe />}>
                                    <h3>{filteredRecipe.title}</h3>
                                    <Card style={{padding:6, width:350}}key={filteredRecipe.id} className='bg-dark text-white'>
                                        <Card.Img 
                                        src={filteredRecipe.img_src} 
                                        alt='recipetype'
                                        width={40}
                                        height={400}
                                        object-fit='cover'
                                        />
                                        <Card.ImgOverlay>
                                            <Card.Title>{filteredRecipe.type}</Card.Title>
                                        </Card.ImgOverlay>
                
                                    </Card>
                                </Link>
                        </Col>
                    ))
                }
            </Row>

        </Container>
    )
};

export default RecipeType;
