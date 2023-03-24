import styled from 'styled-components';
import TeamHappyBgi from '../../assets/images/happy-team-bgi.jpg';

export const HappyTeamSection = styled.section`
  position: relative;
  padding: 270px 0;
  background-image: url(${TeamHappyBgi});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
`;

export const HappyTeamInner = styled.div`
  position: absolute;
  right: calc(50% - 763px);
  bottom: -143px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1360px;
  padding: 95px 96px;
  border-top-left-radius: 7px;
  background-color: #232ed1;
`;

export const HappyTeamTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const HappyTeamTextBox = styled.div`
  width: 100%;
  max-width: 589px;
  margin-left: 90px;
`;

export const HappyTeamText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 171%;
  color: #ffffff;
`;
