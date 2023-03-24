import React from 'react';
import {
  ProductAnalyticItemContent,
  ProductAnalyticItemDesc,
  ProductAnalyticItemFeaturesText,
  ProductAnalyticItemImg,
  ProductAnalyticItemList,
  ProductAnalyticItemListItem,
  ProductAnalyticItemListText,
  ProductAnalyticItemStyle,
  ProductAnalyticItemTitle,
} from './productAnalyticItem.styles';

export const ProductAnalyticItem = ({ obj }) => {
  const { img, featureText, title, desc, listText1, listText2 } = obj;
  return (
    <ProductAnalyticItemStyle>
      <ProductAnalyticItemImg src={img} alt="..." />
      <ProductAnalyticItemContent>
        <ProductAnalyticItemFeaturesText>
          {featureText}
        </ProductAnalyticItemFeaturesText>
        <ProductAnalyticItemTitle>{title}</ProductAnalyticItemTitle>
        <ProductAnalyticItemDesc>{desc}</ProductAnalyticItemDesc>
        <ProductAnalyticItemList>
          <ProductAnalyticItemListItem>
            <ProductAnalyticItemListText>
              {listText1}
            </ProductAnalyticItemListText>
          </ProductAnalyticItemListItem>
          <ProductAnalyticItemListItem>
            <ProductAnalyticItemListText>
              {listText2}
            </ProductAnalyticItemListText>
          </ProductAnalyticItemListItem>
        </ProductAnalyticItemList>
      </ProductAnalyticItemContent>
    </ProductAnalyticItemStyle>
  );
};
