import React from "react";
// import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import  Carousel  from "react-bootstrap/Carousel";


    function Home (){
        return (
            <>
                <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://harthouse.ca/assets/images/uploads/events/_lg-max/hh_events_tastes_of_culture_2021_22.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Discover the world</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>With the most authentic Recipes</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://media.cnn.com/api/v1/images/stellar/prod/160929101749-essential-spanish-dish-paella-phaidon.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>That will take your breath away!</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Rico Recipes! Your yummy option for today's meal</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                {/* <Image src='https://harthouse.ca/assets/images/uploads/events/_lg-max/hh_events_tastes_of_culture_2021_22.png'></Image> */}
            </>

        )


    }


    export {Home}