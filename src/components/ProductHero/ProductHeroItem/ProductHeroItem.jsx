import React from 'react';
import {
  ProductHeroItemStyle,
  ProductHeroItemText,
  ProductHeroItemTitle,
} from './productHeroItem.styles';

export const ProductHeroItem = ({ obj }) => {
  const { img, title, text } = obj;
  return (
    <ProductHeroItemStyle img={`url(${img})`}>
      <ProductHeroItemTitle>{title}</ProductHeroItemTitle>
      <ProductHeroItemText>{text}</ProductHeroItemText>
    </ProductHeroItemStyle>
  );
};
