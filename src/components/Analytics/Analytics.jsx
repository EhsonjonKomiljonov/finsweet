import React from 'react';
import { Container } from '../../Container';
import AnalyticItemData from '../../db/analyticItemData';
import { AnalyticInner, AnalyticList, AnalyticSection, AnalyticTitle } from './analytic.styles';
import { AnalyticItem } from './AnalyticItem/AnalyticItem';

export const Analytics = () => {
  return (
    <AnalyticSection>
      <Container>
        <AnalyticInner>
          <AnalyticTitle className="visually-hidden">Analytic</AnalyticTitle>
          <AnalyticList>
            {AnalyticItemData.map(item => <AnalyticItem obj={item} />)}
          </AnalyticList>
        </AnalyticInner>
      </Container>
    </AnalyticSection>
  );
};
