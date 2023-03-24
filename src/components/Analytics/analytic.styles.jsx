import styled from 'styled-components';

export const AnalyticSection = styled.section`
  padding: 271px 0 128px;
`;

export const AnalyticInner = styled.div``;

export const AnalyticTitle = styled.h2``;

export const AnalyticList = styled.ul`
  display: flex;
  flex-direction: column;

  & > li:nth-child(2) {
    flex-direction: row-reverse;
    margin: 128px 0;
    margin-left: auto;
  }
`;
