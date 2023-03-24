import {
  HappyTeamInner,
  HappyTeamSection,
  HappyTeamText,
  HappyTeamTextBox,
  HappyTeamTitle,
} from './teamHappy.styles';

export const HappyTeam = () => {
  return (
    <HappyTeamSection>
      <HappyTeamInner>
        <HappyTeamTitle>
          Keeps Your <br /> Team Happy
        </HappyTeamTitle>
        <HappyTeamTextBox>
          <HappyTeamText>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Ut nec turpis tristique, egestas lacus at,
            cursus arcu. Vestibulum ante ipsum primis in.
          </HappyTeamText>
        </HappyTeamTextBox>
      </HappyTeamInner>
    </HappyTeamSection>
  );
};
