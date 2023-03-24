import styled from 'styled-components';

export const ProductAnalyticSection = styled.section`
  padding: 0 0 128px;
`;

export const ProductAnalyticInner = styled.div``;

export const ProductAnalyticTitle = styled.h2``;

export const ProductAnalyticList = styled.ul`
  & > li:nth-child(2),
  li:nth-child(4) {
    justify-content: flex-start;
    margin-right: 60px;
    margin-top: 128px;
    margin-bottom: 128px;
    flex-direction: row-reverse;
  }
`;
