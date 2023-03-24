import React from 'react';
import { Customer } from '../../components/Customer/Customer';
import { Header } from '../../components/Header/Header';
import { PricingHeaderBottom } from '../../components/PricingHeaderBottom/PricingHeaderBottom';
import { Questions } from '../../components/Questions/Questions';

export const Pricing = () => {
  return (
    <>
      <Header HeaderBottom={PricingHeaderBottom} />
      <main>
        <Questions />
        <Customer />
      </main>
    </>
  );
};
