import React from 'react';
import { Container } from '../../../Container';
import {
  AboutHeaderBottomStyle,
  AboutHeaderBottomContent,
  AboutHeaderBottomText,
  AboutHeaderBottomTitle,
} from './aboutHeaderBottom.styles';

export const AboutHeaderBottom = () => {
  return (
    <AboutHeaderBottomStyle>
      <Container>
        <AboutHeaderBottomContent>
          <AboutHeaderBottomTitle>About Us</AboutHeaderBottomTitle>
          <AboutHeaderBottomText>
            Lorem ipsum dolor sit amet, consectetur dipiscing elit. Vestibulum
            vitae nunc vitae neque .
          </AboutHeaderBottomText>
        </AboutHeaderBottomContent>
      </Container>
    </AboutHeaderBottomStyle>
  );
};
