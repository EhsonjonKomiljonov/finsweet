import React from 'react';
import { Container } from '../../Container';
import {
  OurTeamInner,
  OurTeamList,
  OurTeamSection,
  OurTeamText,
  OurTeamTitle,
  OurTeamTitleBox,
} from './ourteam.styles';
import { OurTeamItem } from './OurTeamItem/OurTeamItem';
import ourTeamItemData from '../../db/ourTeamItemData';

export const OurTeam = () => {
  return (
    <OurTeamSection>
      <Container>
        <OurTeamInner>
          <OurTeamTitleBox>
            <OurTeamTitle>Our Team</OurTeamTitle>
            <OurTeamText>
              Lorem ipsum dolor sit amet, consectetur dipiscing elit.
            </OurTeamText>
          </OurTeamTitleBox>
          <OurTeamList>
            {ourTeamItemData.map((item) => (
              <OurTeamItem obj={item} />
            ))}
          </OurTeamList>
        </OurTeamInner>
      </Container>
    </OurTeamSection>
  );
};
