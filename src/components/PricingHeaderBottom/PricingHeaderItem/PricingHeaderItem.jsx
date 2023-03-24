import React from 'react';
import {
  PricingHeaderBototmItemList,
  PricingHeaderBottomItem,
  PricingHeaderBottomItemBtn,
  PricingHeaderBottomItemListItem,
  PricingHeaderBottomItemListText,
  PricingHeaderBottomPrice,
  PricingHeaderBottomPriceBox,
  PricingHeaderBottomPriceSmall,
  PricingHeaderBottomSubtitle,
  PricingHeaderBotttomItemText,
} from './pricingHeaderItem.styles';

export const PricingHeaderItem = ({ obj }) => {
  const {
    title,
    price,
    text,
    listText1,
    listText2,
    listText3,
    listText4,
    listText5,
  } = obj;
  return (
    <PricingHeaderBottomItem>
      <PricingHeaderBottomSubtitle>{title}</PricingHeaderBottomSubtitle>
      <PricingHeaderBottomPriceBox>
        <PricingHeaderBottomPrice>
          <PricingHeaderBottomPriceSmall>$</PricingHeaderBottomPriceSmall>
          {price}
          <PricingHeaderBottomPriceSmall>/mo</PricingHeaderBottomPriceSmall>
        </PricingHeaderBottomPrice>
        <PricingHeaderBotttomItemText>{text}</PricingHeaderBotttomItemText>
      </PricingHeaderBottomPriceBox>
      <PricingHeaderBototmItemList>
        <PricingHeaderBottomItemListItem>
          <PricingHeaderBottomItemListText>
            {listText1}
          </PricingHeaderBottomItemListText>
        </PricingHeaderBottomItemListItem>
        <PricingHeaderBottomItemListItem>
          <PricingHeaderBottomItemListText>
            {listText2}
          </PricingHeaderBottomItemListText>
        </PricingHeaderBottomItemListItem>
        <PricingHeaderBottomItemListItem>
          <PricingHeaderBottomItemListText>
            {listText3}
          </PricingHeaderBottomItemListText>
        </PricingHeaderBottomItemListItem>
        <PricingHeaderBottomItemListItem>
          <PricingHeaderBottomItemListText>
            {listText4}
          </PricingHeaderBottomItemListText>
        </PricingHeaderBottomItemListItem>
        <PricingHeaderBottomItemListItem>
          <PricingHeaderBottomItemListText>
            {listText5}
          </PricingHeaderBottomItemListText>
        </PricingHeaderBottomItemListItem>
      </PricingHeaderBototmItemList>
      <PricingHeaderBottomItemBtn>Get Started</PricingHeaderBottomItemBtn>
    </PricingHeaderBottomItem>
  );
};
