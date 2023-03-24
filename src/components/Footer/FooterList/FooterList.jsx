import React from 'react';
import { FooterItem, FooterListBox, FooterListLink, FooterListStyle, FooterListTitle } from './footerList.styles';

export const FooterList = ({ obj }) => {
  const { title, link1, link1To, link2, link2To, link3, link3To } = obj;
  return (
    <FooterListBox>
      <FooterListTitle>{title}</FooterListTitle>
      <FooterListStyle>
        <FooterItem>
          <FooterListLink to={link1To}>
            {link1}
          </FooterListLink>
        </FooterItem>
        <FooterItem>
          <FooterListLink to={link2To}>
            {link2}
          </FooterListLink>
        </FooterItem>
        <FooterItem>
          <FooterListLink to={link3To}>
            {link3}
          </FooterListLink>
        </FooterItem>
      </FooterListStyle>
    </FooterListBox>
  );
};
