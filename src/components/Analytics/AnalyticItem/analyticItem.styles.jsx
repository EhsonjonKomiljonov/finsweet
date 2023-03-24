import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRightIcon from '../../../assets/images/arrow-right.svg';

export const AnalyticItemStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1324px;
`;

export const AnalyticImg = styled.img``;

export const AnalyticItemContent = styled.div`
  width: 100%;
  max-width: 512px;
`;

export const AnalyticFeatureText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #232ed1;
`;

export const AnalyticItemTitle = styled.h3`
  margin: 16px 0 24px;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const AnalyticItemDesc = styled.p`
  margin: 0 0 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;

export const AnalyticItemLink = styled(Link)`
  position: relative;
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 171%;
  color: #1a1a1a;

  &::after {
    position: absolute;
    top: 8px;
    right: -25px;
    width: 17px;
    height: 15px;
    background-image: url(${ArrowRightIcon});
    content: '';
  }
`;
