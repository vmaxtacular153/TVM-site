import React from 'react';
import {
    ProductsContainer,
    ProductsWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductWeight,
    ProductPrice,
    ProductButton
} from './productsElements';

const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img}
                                        alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductWeight>{product.weight}</ProductWeight>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>            
                        </ProductCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products;