import React from 'react';
import { Container } from '../../../Container';
import { BlueButton } from '../../BlueButton/BlueButton';
import {
  SiteHeaderBottom,
  SiteHeaderBottomBtnBox,
  SiteHeaderBottomInner,
  SiteHeaderBottomLink,
  SiteHeaderBottomText,
  SiteHeaderBottomTextBox,
  SiteHeaderBottomTitle,
} from './headerHomeBottom.styles';

export const HeaderBottom = () => {
  return (
    <SiteHeaderBottom>
      <Container>
        <SiteHeaderBottomInner>
          <SiteHeaderBottomTitle>
            Run Your Entire Customer Support Remotely
          </SiteHeaderBottomTitle>
          <SiteHeaderBottomTextBox>
            <SiteHeaderBottomText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae nunc vitae neque
            </SiteHeaderBottomText>
          </SiteHeaderBottomTextBox>
          <SiteHeaderBottomBtnBox>
            <BlueButton text="Get Started For Free" />
            <SiteHeaderBottomLink to="/pricing">Pricing</SiteHeaderBottomLink>
          </SiteHeaderBottomBtnBox>
        </SiteHeaderBottomInner>
      </Container>
    </SiteHeaderBottom>
  );
};
