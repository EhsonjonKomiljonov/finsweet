import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GetStartedSection = styled.div`
  position: absolute;
  top: -150px;
  right: calc(50% - 759px);
  z-index: 5;
  width: 1516px;
`;

export const GetStartedInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 101px 122px;
  background-color: #232ed1;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

  &::before {
    position: absolute;
    top: 0;
    left: -50px;
    width: 32px;
    height: 32px;
    background-color: #f24c27;
    border-bottom-left-radius: 6px;
    content: '';
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: -50px;
    width: 16px;
    height: 16px;
    background-color: #232ed1;
    border-bottom-right-radius: 3px;
    content: '';
  }
`;

export const GetStartedTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 106.5%;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const Br = styled.br``;

export const GetStartedLink = styled(Link)`
  display: inline-block;
  width: 256px;
  padding: 15px 0;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 171%;
  color: #ffffff;
  background-color: #f24c27;
  border-radius: 5px;
`;
