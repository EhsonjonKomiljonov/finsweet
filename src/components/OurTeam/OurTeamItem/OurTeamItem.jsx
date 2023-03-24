import React from 'react';
import FacebookIcon from '../../../assets/images/facebook-icon.svg';
import InstagramIcon from '../../../assets/images/instagram-icon.svg';
import TwitterIcon from '../../../assets/images/twitter-icon.svg';
import {
  OurTeamItemJobPosition,
  OurTeamItemLink,
  OurTeamItemList,
  OurTeamItemListImg,
  OurTeamItemListItem,
  OurTeamItemStyle,
  OurTeamItemTitle,
  OurTemaItemImg,
} from './ourTeamItem.styles';

export const OurTeamItem = ({ obj }) => {
  const { img, jobPosition, name } = obj;
  return (
    <OurTeamItemStyle>
      <OurTemaItemImg src={img} alt={name} />
      <OurTeamItemJobPosition>{jobPosition}</OurTeamItemJobPosition>
      <OurTeamItemTitle>{name}</OurTeamItemTitle>
      <OurTeamItemList>
        <OurTeamItemListItem>
          <OurTeamItemLink href="https://facebook.com">
            <OurTeamItemListImg src={FacebookIcon} alt="facebook" />
          </OurTeamItemLink>
        </OurTeamItemListItem>
        <OurTeamItemListItem>
          <OurTeamItemLink href="https://facebook.com">
            <OurTeamItemListImg src={InstagramIcon} alt="Instagram" />
          </OurTeamItemLink>
        </OurTeamItemListItem>
        <OurTeamItemListItem>
          <OurTeamItemLink href="https://facebook.com">
            <OurTeamItemListImg src={TwitterIcon} alt="twitter" />
          </OurTeamItemLink>
        </OurTeamItemListItem>
      </OurTeamItemList>
    </OurTeamItemStyle>
  );
};
