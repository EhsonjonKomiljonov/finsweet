import React from 'react';
import { HappyCustomers } from '../../components/HappyCustomers/HappyCustomers';
import { Header } from '../../components/Header/Header';
import { ProductHeaderBottom } from '../../components/Header/ProductHeaderBottom/ProductHeaderBottom';
import { ProductAnalytic } from '../../components/ProductAnalytic/ProductAnalytic';
import { ProductHero } from '../../components/ProductHero/ProductHero';

export const Product = () => {
  return (
    <>
      <Header HeaderBottom={ProductHeaderBottom} />
      <main>
        <ProductHero />
        <ProductAnalytic />
        <HappyCustomers />
      </main>
    </>
  );
};
