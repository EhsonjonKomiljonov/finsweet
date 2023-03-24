import React from 'react';
import { Container } from '../../Container';
import customerItemData from '../../db/customerItemData';
import {
  CustomerInner,
  CustomerList,
  CustomerSection,
  CustomerTitle,
} from './customer.styles';
import { CustomerItem } from './CustomerItem/CustomerItem';

export const Customer = () => {
  return (
    <CustomerSection>
      <Container>
        <CustomerInner>
          <CustomerTitle>Customer Testimonials</CustomerTitle>
          <CustomerList>
            {customerItemData.map((item) => (
              <CustomerItem obj={item} />
            ))}
          </CustomerList>
        </CustomerInner>
      </Container>
    </CustomerSection>
  );
};
