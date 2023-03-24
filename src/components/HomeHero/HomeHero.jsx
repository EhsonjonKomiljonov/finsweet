import React from 'react';
import { Container } from '../../Container';
import {
  HomeHeroContent,
  HomeHeroInner,
  HomeHeroItem,
  HomeHeroItemTitle,
  HomeHeroList,
  HomeHeroQuestion,
  HomeHeroSection,
  HomeHeroText,
  HomeHeroTitle,
} from './homeHero.styles';

export const HomeHero = () => {
  return (
    <HomeHeroSection>
      <Container>
        <HomeHeroInner>
          <HomeHeroContent>
            <HomeHeroQuestion>Why Choose Us?</HomeHeroQuestion>
            <HomeHeroTitle>
              Premium features <br /> for competitive price
            </HomeHeroTitle>
            <HomeHeroText>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Ut nec turpis tristique, egestas lacus at,
              cursus arcu
            </HomeHeroText>
          </HomeHeroContent>
          <HomeHeroList>
            <HomeHeroItem>
              <HomeHeroItemTitle>Best In Market</HomeHeroItemTitle>
            </HomeHeroItem>
            <HomeHeroItem>
              <HomeHeroItemTitle>Highly Secure</HomeHeroItemTitle>
            </HomeHeroItem>
            <HomeHeroItem>
              <HomeHeroItemTitle>Easy Analytics</HomeHeroItemTitle>
            </HomeHeroItem>
            <HomeHeroItem>
              <HomeHeroItemTitle>Priority Support</HomeHeroItemTitle>
            </HomeHeroItem>
          </HomeHeroList>
        </HomeHeroInner>
      </Container>
    </HomeHeroSection>
  );
};
