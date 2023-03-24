import React from 'react';
import {
  AnalyticFeatureText,
  AnalyticImg,
  AnalyticItemContent,
  AnalyticItemDesc,
  AnalyticItemLink,
  AnalyticItemStyle,
  AnalyticItemTitle,
} from './analyticItem.styles';

export const AnalyticItem = ({ obj }) => {
  const { img, featureText, title, desc } = obj;
  return (
    <>
      <AnalyticItemStyle>
        <AnalyticImg src={img} alt="Analytic" />
        <AnalyticItemContent>
          <AnalyticFeatureText>{featureText}</AnalyticFeatureText>
          <AnalyticItemTitle>{title}</AnalyticItemTitle>
          <AnalyticItemDesc>{desc}</AnalyticItemDesc>
          <AnalyticItemLink to="/">Learn More</AnalyticItemLink>
        </AnalyticItemContent>
      </AnalyticItemStyle>
    </>
  );
};
