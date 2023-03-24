import styled from 'styled-components';
import Stars from '../../../assets/images/stars.svg';

export const CustomerItemStyle = styled.li`
  width: 100%;
  max-width: 452px;
  padding: 32px;
  background-image: linear-gradient(
    180deg,
    rgba(182, 186, 255, 0.2) 0%,
    rgba(35, 46, 209, 0.2) 100%
  );
  border-radius: 12px;
`;

export const CustomerItemInner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const CustomerItemImg = styled.img``;

export const CustomerItemTitle = styled.h3`
  margin: 0;
  margin-left: 16px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #000000;

  &::after {
    display: block;
    width: 125px;
    height: 20px;
    background-image: url(${Stars});
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }
`;

export const CustomerItemDesc = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #0d1317;
`;
