import React from 'react';
import { Container } from '../../Container';
import AnalyticItemData from '../../db/analyticItemData';
import productAnalyticData from '../../db/productAnalyticData';
import { AnalyticItem } from '../Analytics/AnalyticItem/AnalyticItem';
import {
  ProductAnalyticInner,
  ProductAnalyticList,
  ProductAnalyticSection,
  ProductAnalyticTitle,
} from './productAnalytic.styles';
import { ProductAnalyticItem } from './ProductAnalyticItem/ProductAnalyticItem';

export const ProductAnalytic = () => {
  return (
    <ProductAnalyticSection>
      <Container>
        <ProductAnalyticInner>
          <ProductAnalyticTitle className="visually-hidden">
            Analytic
          </ProductAnalyticTitle>
          <ProductAnalyticList>
            {productAnalyticData.map((item) => (
              <ProductAnalyticItem obj={item} />
            ))}
            {AnalyticItemData.map((item) => (
              <AnalyticItem obj={item} />
            ))}
          </ProductAnalyticList>
        </ProductAnalyticInner>
      </Container>
    </ProductAnalyticSection>
  );
};
