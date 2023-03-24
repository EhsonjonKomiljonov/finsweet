import React from 'react';
import { Container } from '../../Container';
import FinsweetImg from '../../assets/images/finsweet-img.jpg';
import {
  FinsweetDesc,
  FinsweetImgbox,
  FinsweetImgStyle,
  FinsweetInner,
  FinsweetSection,
  FinsweetSubtitle,
  FinsweetText,
  FinsweetTextBox,
  FinsweetTitle,
  FinsweetTitleBox,
} from './finsweet.styles';

export const Finsweet = () => {
  return (
    <FinsweetSection>
      <Container>
        <FinsweetInner>
          <FinsweetTitleBox>
            <FinsweetTitle>Finsweet</FinsweetTitle>
            <FinsweetDesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nulla eu lorem rutrum tempus. Integer tincidunt tellus quis est
              tincidunt auctor.
            </FinsweetDesc>
          </FinsweetTitleBox>
          <FinsweetImgbox>
            <FinsweetImgStyle
              width="100%"
              height="auto"
              src={FinsweetImg}
              alt="Finsweet"
            />
          </FinsweetImgbox>
          <FinsweetTextBox>
            <FinsweetText>
              Phasellus scelerisque eros felis, ut lobortis ipsum mattis
              ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada
              sed dolor. Pellentesque facilisis condimentum nunc, nec placerat
              eros aliquam lobortis. Nullam non bibendum neque, nec sagittis
              risus. Proin est metus, bibendum at maximus quis, placerat id
              sapien. Fusce ipsum quam, placerat sit amet mauris vitae, suscipit
              ultrices turpis. Etiam ac eros est. Quisque id rhoncus dolor, eget
              gravida ante. Integer commodo id lacus at fringilla.
            </FinsweetText>
            <FinsweetSubtitle>
              Phasellus scelerisque eros felis, ut lobortis ipsum mattis
              ullamcorper. Morbi magna orci, ornare vel auctor non, malesuada
              sed dolor. Pellentesque facilisis
            </FinsweetSubtitle>
          </FinsweetTextBox>
        </FinsweetInner>
      </Container>
    </FinsweetSection>
  );
};
