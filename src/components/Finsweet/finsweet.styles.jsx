import styled from 'styled-components';

export const FinsweetSection = styled.section`
  padding: 0 0 128px;
`;

export const FinsweetInner = styled.div``;

export const FinsweetTitleBox = styled.div`
  width: 851px;
  margin-bottom: 80px;
`;

export const FinsweetTitle = styled.h2`
  margin: 0 0 24px;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const FinsweetDesc = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;

export const FinsweetImgbox = styled.div`
  position: relative;
  &::before {
    position: absolute;
    right: 115px;
    bottom: -35px;  
    width: 77px;
    height: 85px;
    background-color: #232ed1;
    border-bottom-right-radius: 20px;
    content: '';
  }

  &::after {
    position: absolute;
    right: 60px;
    bottom: -100px;
    width: 49px;
    height: 53px;
    background-color: #F24C27;
    border-top-left-radius: 10px;
    content: '';
  }
`;

export const FinsweetImgStyle = styled.img``;

export const FinsweetTextBox = styled.div`
  width: 1054px;
  margin-top: 80px;
`;

export const FinsweetText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: #5b5b5b;
`;

export const FinsweetSubtitle = styled.strong`
  display: inline-block;
  margin-top: 30px;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
`;
