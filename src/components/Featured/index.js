import React from 'react';
import {
    FeaturedContainer,
    FeaturedButton
} from './featuredElements';

const Featured = () => {
    return (
        <FeaturedContainer>
            <h1>Weekly Sausage Special</h1>
            <p>Philly Cheese Steak Beef Sausage filled with 
            chunks of provalone, roasted onions, and bell peppers</p>
            <FeaturedButton>Order Now</FeaturedButton>
        </FeaturedContainer>
    )
}

export default Featured;
