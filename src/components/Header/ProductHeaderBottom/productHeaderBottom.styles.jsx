import styled from 'styled-components';
import ProductHeaderBottomImg from '../../../assets/images/product-header-bottom-bgi.png';

export const ProductHeader = styled.div`
  padding: 170px 0 220px;
  background-image: url(${ProductHeaderBottomImg});
  background-repeat: no-repeat;
  background-position: center right calc(50% - 360px);
`;

export const ProductHeaderContent = styled.div`
  width: 576px;
  margin-right: auto;
`;

export const ProductHeaderTitle = styled.h2`
  margin: 0 0 32px;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const ProductHeaderText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;
