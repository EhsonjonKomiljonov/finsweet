import React from 'react';
import { Container } from '../../Container';
import productItemData from '../../db/productHeroItemData';
import { Br } from '../GetStarted/getStarted.styles';
import {
  ProductHeroInner,
  ProductHeroList,
  ProductHeroSection,
  ProductHeroTitle,
} from './productHero.styles';
import { ProductHeroItem } from './ProductHeroItem/ProductHeroItem';

export const ProductHero = () => {
  return (
    <ProductHeroSection>
      <Container>
        <ProductHeroInner>
          <ProductHeroTitle>
            Get the best out of your customer <Br /> support with Finsweet
          </ProductHeroTitle>
          <ProductHeroList>
            {productItemData.map((item) => (
              <ProductHeroItem obj={item} />
            ))}
          </ProductHeroList>
        </ProductHeroInner>
      </Container>
    </ProductHeroSection>
  );
};
