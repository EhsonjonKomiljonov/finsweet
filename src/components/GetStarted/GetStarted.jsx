import React from 'react';
import { Container } from '../../Container';
import {
  GetStartedInner,
  GetStartedLink,
  GetStartedSection,
  GetStartedTitle,
  Br,
} from './getStarted.styles';

export const GetStarted = () => {
  return (
    <GetStartedSection>
      <Container>
        <GetStartedInner>
          <GetStartedTitle>
            Get started <Br /> with Finsweet today
          </GetStartedTitle>
          <GetStartedLink to="/pricing">View Pricing</GetStartedLink>
        </GetStartedInner>
      </Container>
    </GetStartedSection>
  );
};
