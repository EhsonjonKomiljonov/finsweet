import styled from 'styled-components';
import OrderIcon from '../../assets/images/order-icon.svg';
import SecurityIcon from '../../assets/images/security-icon.svg';
import LikeIcon from '../../assets/images/like-icon.svg';
import EarBudIcon from '../../assets/images/earbuds-icon.svg';

export const HomeHeroSection = styled.section`
  padding: 120px 0;
`;

export const HomeHeroInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1176px;
  margin: 0 auto;
`;

export const HomeHeroContent = styled.div`
  width: 100%;
  max-width: 512px;
`;

export const HomeHeroQuestion = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #232ed1;
`;

export const HomeHeroTitle = styled.h2`
  margin: 16px 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const HomeHeroText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;

export const HomeHeroList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 552px;
  height: 530px;
`;

export const HomeHeroItem = styled.li`
  position: absolute;
  width: 260px;
  padding: 156px 74px 32px 40px;
  border-radius: 12px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 217, 208, 0.2) 0%,
    rgba(242, 76, 39, 0.2) 100%
  );

  &:nth-child(1),
  &:nth-child(2) {
    background-image: linear-gradient(
      180deg,
      rgba(182, 186, 255, 0.2) 0%,
      rgba(35, 46, 209, 0.2) 100%
    );

    &:hover {
      background-image: linear-gradient(
        180deg,
        rgba(255, 217, 208, 0.2) 0%,
        rgba(242, 76, 39, 0.2) 100%
      );

      h3 {
        color: #f24c27;
      }
    }

    h3 {
      color: #232ed1;
    }
  }

  &:nth-child(3):hover, &:nth-child(4):hover {
    background-image: linear-gradient(
      180deg,
      rgba(182, 186, 255, 0.2) 0%,
      rgba(35, 46, 209, 0.2) 100%
    );

    h3 {
      color: #232ed1;
    }
  }

  &:nth-child(1)::before {
    position: absolute;
    top: 48px;
    width: 40px;
    height: 55px;
    background-image: url(${OrderIcon});
    content: '';
  }

  &:nth-child(2) {
    top: -35px;
    right: 0;

    &::before {
      position: absolute;
      top: 48px;
      width: 48px;
      height: 48px;
      background-image: url(${SecurityIcon});
      background-repeat: no-repeat;
      content: '';
    }
  }

  &:nth-child(3) {
    bottom: -32px;

    &::before {
      position: absolute;
      top: 48px;
      width: 48px;
      height: 48px;
      background-image: url(${LikeIcon});
      background-repeat: no-repeat;
      content: '';
    }
  }

  &:nth-child(4) {
    right: 0;
    bottom: 0;

    &::before {
      position: absolute;
      top: 48px;
      width: 54px;
      height: 54px;
      background-image: url(${EarBudIcon});
      background-repeat: no-repeat;
      background-position: center;
      content: '';
    }
  }
`;

export const HomeHeroItemTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #f24c27;
`;
