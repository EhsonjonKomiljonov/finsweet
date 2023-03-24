import React from 'react';
import { Container } from '../../Container';
import pricingHeaderBottomData from '../../db/pricingHeaderBottomData';
import {
  PricingHeaderBottomInner,
  PricingHeaderBottomListBox,
  PricingHeaderBottomStyle,
  PricingHeaderBottomText,
  PricingHeaderBottomTitle,
  PricingHeaderBottomTitleBox,
  PricongHeaderBottomList,
} from './pricingHeaderBottom.styles';
import { PricingHeaderItem } from './PricingHeaderItem/PricingHeaderItem';

export const PricingHeaderBottom = () => {
  return (
    <PricingHeaderBottomStyle>
      <Container>
        <PricingHeaderBottomInner>
          <PricingHeaderBottomTitleBox>
            <PricingHeaderBottomTitle>Pricing</PricingHeaderBottomTitle>
            <PricingHeaderBottomText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae nunc vitae neque .
            </PricingHeaderBottomText>
          </PricingHeaderBottomTitleBox>
          <PricingHeaderBottomListBox>
            <PricongHeaderBottomList>
              {pricingHeaderBottomData.map((item) => (
                <PricingHeaderItem obj={item} />
              ))}
            </PricongHeaderBottomList>
          </PricingHeaderBottomListBox>
        </PricingHeaderBottomInner>
      </Container>
    </PricingHeaderBottomStyle>
  );
};
