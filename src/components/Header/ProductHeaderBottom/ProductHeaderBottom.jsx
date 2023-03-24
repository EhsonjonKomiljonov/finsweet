import React from 'react';
import { Container } from '../../../Container';
import {
  ProductHeader,
  ProductHeaderContent,
  ProductHeaderText,
  ProductHeaderTitle,
} from './productHeaderBottom.styles';

export const ProductHeaderBottom = () => {
  return (
    <ProductHeader>
      <Container>
        <ProductHeaderContent>
          <ProductHeaderTitle>
            Help your team to focus on priority tasks
          </ProductHeaderTitle>
          <ProductHeaderText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vitae nunc vitae neque .
          </ProductHeaderText>
        </ProductHeaderContent>
      </Container>
    </ProductHeader>
  );
};
