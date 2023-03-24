import React from 'react';
import {
  CustomerItemDesc,
  CustomerItemImg,
  CustomerItemInner,
  CustomerItemStyle,
  CustomerItemTitle,
} from './customer.styles';

export const CustomerItem = ({ obj }) => {
  const { img, name, text } = obj;
  return (
    <CustomerItemStyle>
      <CustomerItemInner>
        <CustomerItemImg src={img} alt="Person" />
        <CustomerItemTitle>{name}</CustomerItemTitle>
      </CustomerItemInner>
      <CustomerItemDesc>{text}</CustomerItemDesc>
    </CustomerItemStyle>
  );
};
