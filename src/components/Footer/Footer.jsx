import React from 'react';
import { Container } from '../../Container';
import { GetStarted } from '../GetStarted/GetStarted';
import FaceBookIcon from '../../assets/images/facebook-icon.svg';
import InstagramIcon from '../../assets/images/instagram-icon.svg';
import TwitterIcon from '../../assets/images/twitter-icon.svg';
import {
  FooterAddress,
  FooterBody,
  FooterBodyInner,
  FooterBottom,
  FooterBottomSmallContent,
  FooterContactLink,
  FooterContentBox,
  FooterForm,
  FooterFormBtn,
  FooterInner,
  FooterInput,
  FooterLabel,
  FooterSocialsImg,
  FooterSocialsItem,
  FooterSocialsLink,
  FooterSocialsList,
  FooterStyle,
  FooterTop,
  FooterTopInner,
} from './footer.styles';
import footerItemData from '../../db/footerItemData';
import { FooterList } from './FooterList/footerList';
import {
  FooterItem,
  FooterListBox,
  FooterListLink,
  FooterListStyle,
  FooterListTitle,
} from './FooterList/footerList.styles';

export const Footer = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <FooterStyle>
      <FooterInner>
        <GetStarted />
        <FooterTop>
          <Container>
            <FooterTopInner>
              <FooterSocialsList>
                <FooterSocialsItem>
                  <FooterSocialsLink
                    href="https://facebook.com"
                    target="_blank"
                  >
                    <FooterSocialsImg src={FaceBookIcon} alt="FaceBook" />
                  </FooterSocialsLink>
                </FooterSocialsItem>
                <FooterSocialsItem>
                  <FooterSocialsLink
                    href="https://instagram.com"
                    target="_blank"
                  >
                    <FooterSocialsImg src={InstagramIcon} alt="Instagram" />
                  </FooterSocialsLink>
                </FooterSocialsItem>
                <FooterSocialsItem>
                  <FooterSocialsLink href="https://twitter.com" target="_blank">
                    <FooterSocialsImg src={TwitterIcon} alt="Twitter" />
                  </FooterSocialsLink>
                </FooterSocialsItem>
              </FooterSocialsList>
              <FooterContentBox>
                {footerItemData.map((item) => (
                  <FooterList obj={item} />
                ))}
                <FooterListBox>
                  <FooterListTitle>Reach Us</FooterListTitle>
                  <FooterListStyle>
                    <FooterItem>
                      <FooterListLink to="/contact">Contact Us</FooterListLink>
                    </FooterItem>
                    <FooterItem>
                      <FooterContactLink
                        href="https://fs@finsweet.com"
                        target="_blank"
                      >
                        fs@finsweet.com
                      </FooterContactLink>
                    </FooterItem>
                    <FooterItem>
                      <FooterContactLink href="tel:+18080808">
                        +1808 08 08
                      </FooterContactLink>
                    </FooterItem>
                  </FooterListStyle>
                </FooterListBox>
              </FooterContentBox>
            </FooterTopInner>
          </Container>
        </FooterTop>
        <FooterBody>
          <Container>
            <FooterBodyInner>
              <FooterAddress>398 11th St, San Francisco</FooterAddress>
              <FooterForm onSubmit={(evt) => handleSubmit(evt)}>
                <FooterInput
                  type="email"
                  id="footer-input"
                  placeholder="Enter your email"
                />
                <FooterLabel htmlFor="footer-input"></FooterLabel>
                <FooterFormBtn>Subscribe to our newsletter</FooterFormBtn>
              </FooterForm>
            </FooterBodyInner>
          </Container>
        </FooterBody>
        <FooterBottom>
          <FooterBottomSmallContent>
            © Copyright Unsaas 2021
          </FooterBottomSmallContent>
        </FooterBottom>
      </FooterInner>
    </FooterStyle>
  );
};
